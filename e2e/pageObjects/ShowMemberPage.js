class ShowMemberPage {

    // Show Member header elements
    get showMemberHeader() {
        return element(by.id('showMemberHeader'));
    }
    get editMemberIcon() {
        return element(by.id('editMemberIcon'));
    }

    // Show Member body elements
    get showMemberBackground() {
        return by.id('showMemberBackground');
    }
    get memberIdLabel() {
        return element(by.id('memberFieldLabel-id'));
    }
    get memberIdValue() {
        return element(by.id('memberFieldValue-id'));
    }
    get memberNameLabel() {
        return element(by.id('memberFieldLabel-name'));
    }
    get memberNameValue() {
        return element(by.id('memberFieldValue-name'));
    }
    get memberSurnameLabel() {
        return element(by.id('memberFieldLabel-surname'));
    }
    get memberSurnameValue() {
        return element(by.id('memberFieldValue-surname'));
    }
    get memberDateOfBirthLabel() {
        return element(by.id('memberFieldLabel-dateOfBirth'));
    }
    get memberDateOfBirthValue() {
        return element(by.id('memberFieldValue-dateOfBirth'));
    }
    get memberStartDayLabel() {
        return element(by.id('memberFieldLabel-startDay'));
    }
    get memberStartDayValue() {
        return element(by.id('memberFieldValue-startDay'));
    }
    get memberEmailLabel() {
        return element(by.id('memberFieldLabel-email'));
    }
    get memberEmailValue() {
        return element(by.id('memberFieldValue-email'));
    }
    get memberAddressLineOneLabel() {
        return element(by.id('memberFieldLabel-addressLineOne'));
    }
    get memberAddressLineOneValue() {
        return element(by.id('memberFieldValue-addressLineOne'));
    }
    get memberAddressLineTwoLabel() {
        return element(by.id('memberFieldLabel-addressLineTwo'));
    }
    get memberAddressLineTwoValue() {
        return element(by.id('memberFieldValue-addressLineTwo'));
    }
    get memberCityLabel() {
        return element(by.id('memberFieldLabel-city'));
    }
    get memberCityValue() {
        return element(by.id('memberFieldValue-city'));
    }
    get memberPostcodeLabel() {
        return element(by.id('memberFieldLabel-postcode'));
    }
    get memberPostcodeValue() {
        return element(by.id('memberFieldValue-postcode'));
    }
    get memberCountryLabel() {
        return element(by.id('memberFieldLabel-country'));
    }
    get memberCountryValue() {
        return element(by.id('memberFieldValue-country'));
    }
    get memberStartDateLabel() {
        return element(by.id('memberFieldLabel-startDate'));
    }
    get memberStartDateValue() {
        return element(by.id('memberFieldValue-startDate'));
    }
    get memberStartTimeLabel() {
        return element(by.id('memberFieldLabel-startTime'));
    }
    get memberStartTimeValue() {
        return element(by.id('memberFieldValue-startTime'));
    }
}

export default new ShowMemberPage();