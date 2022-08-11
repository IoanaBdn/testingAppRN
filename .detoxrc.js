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
      "ios.sim.release": {
        "binaryPath": "ios/build/Build/Products/Release-iphonesimulator/pqaa_detox.app",
        "build": "ENVFILE=.env.testing xcodebuild -workspace ios/pqaa_detox.xcworkspace -scheme pqaa_detox -configuration Release -sdk iphonesimulator -derivedDataPath ios/build",
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
      },
      "android.emu.release": {
        "binaryPath": "android/app/build/outputs/apk/release/app-release.apk",
        "build": "cd android && ENVFILE=.env.testing ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release && cd ..",
        "type": "android.emulator",
        "device": {
            "avdName": "Pixel_XL"
        },
        "artifacts": {
            "rootDir": "e2e/reports/artifacts/android",
        }
    }
  }
}