import assert from "chai";
import testData from "./TestData";

class BaseData {
  getId(memberNumber) {
    switch (memberNumber) {
      case "1":
        return testData.getId_1();
      case "2":
        return testData.getId_2();
      default:
        assert.fail(`The entered ${memberNumber} is an invalid number for Member ID`);
    }
  }

  getName(memberNumber) {
    switch (memberNumber) {
      case "1":
        return testData.getName_1();
      case "2":
        return testData.getName_2();
      default:
        assert.fail(`The entered ${memberNumber} is an invalid number for Member Name`);
    }
  }

  getSurname(memberNumber) {
    switch (memberNumber) {
      case "1":
        return testData.getSurname_1();
      case "2":
        return testData.getSurname_2();
      default:
        assert.fail(`The entered ${memberNumber} is an invalid number for Member Surame`);
    }
  }

  getEmail(memberNumber) {
    switch (memberNumber) {
      case "1":
        return testData.getEmail_1();
      case "2":
        return testData.getEmail_2();
      default:
        assert.fail(`The entered ${memberNumber} is an invalid number form Member Email`);
    }
  }

  getStartDate(memberNumber) {
    switch (memberNumber) {
      case "1":
        return testData.getStartDate_1();
      case "2":
        return testData.getStartDate_2();
      default:
        assert.fail(`The entered ${memberNumber} is an invalid number form Member Start Date`);
    }
  }

  getMonth(month) {
    switch (month) {
      case "01":
        return "Jan";
      case "02":
        return "Feb";
      case "03":
        return "Mar";
      case "04":
        return "Apr";
      case "05":
        return "May";
      case "06":
        return "Jun";
      case "07":
        return "Jul";
      case "08":
        return "Aug";
      case "09":
        return "Sep";
      case "10":
        return "Oct";
      case "11":
        return "Nov";
      case "12":
        return "Dec";
      default:
        assert.fail(`The entered ${month} is an invalid month`);
    }
  }

  getMonthNumber(month) {
    switch (month) {
      case "January":
        return "01";
      case "February":
        return "02";
      case "March":
        return "03";
      case "April":
        return "04";
      case "May":
        return "05";
      case "June":
        return "06";
      case "July":
        return "07";
      case "August":
        return "08";
      case "September":
        return "09";
      case "October":
        return "10";
      case "November":
        return "11";
      case "December":
        return "12";
      default:
        assert.fail(`The entered ${month} is an invalid month`);
    }
  }
}

export default new BaseData();
