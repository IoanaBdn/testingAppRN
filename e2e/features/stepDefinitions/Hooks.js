import { BeforeAll, Before, AfterAll, After } from "@cucumber/cucumber";
import { init, cleanup } from "detox";
import { detox as config } from "../../../package.json";
import testData from "../../testData/TestData";

BeforeAll({ timeout: 60 * 1000 }, async () => {
  await init(config);
});

Before(async (testCase) => {
  let instanceBoolean = true;
  for (let i = 0; i < testCase.pickle.tags.length; i++) {
    let tag = testCase.pickle.tags[i].name;
    if (
      (tag === "@addmembers" ||
      testData.getLastTag() === "@addmembers") ||
      (tag === "@editmembers" ||
      testData.getLastTag() === "@editmembers")
    ) {
      instanceBoolean = false;
    } else if ((tag === "@addmembers" )|| (tag === "@editmembers")) {
      testData.settLastTag(tag);
    }
  }
  await device.launchApp({ delete: instanceBoolean, newInstance: true });
});

AfterAll(async () => {
  await cleanup();
});
