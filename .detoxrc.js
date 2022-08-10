module.exports = {
  "configurations": {
      "ios.sim.debug": {
          "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/pqaa_detox.app",
          "build": "ENVFILE=.env.testing xcodebuild -workspace ios/pqaa_detox.xcworkspace -scheme pqaa_detox -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
          "type": "ios.simulator",
          "device": {
              "type": "iPhone 12 Pro"
          },
          "artifacts": {
              "rootDir": "e2e/reports/artifacts/ios",
          }
      },
      "android.emu.debug": {
          "binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
          "build": "cd android && ENVFILE=.env.testing ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
          "type": "android.attached",
          "device": {
              "adbName": "emulator-5554"
          },
          "artifacts": {
              "rootDir": "e2e/reports/artifacts/android",
          }
      }
  }
}