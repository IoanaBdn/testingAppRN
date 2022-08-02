import assert from 'chai';
class HomePage{

    get countersSection(){
        return element(by.id('homeSectionText-counters'));
    }
    get membersSection(){
        return element(by.id('homeSectionText-members'));
    }
    get citiesSection(){
        return element(by.id('homeSectionText-cities'));
    }
    get animationSection(){
        return element(by.id('homeSectionText-animation'));
    }
    get extrasSection(){
        return element(by.id('homeSectionText-extras'));
    }

    async tapHomeSection(section){
        switch(section){
            case 'Counters':
                await this.countersSection.tap();
                break;
            case 'Members':
                await this.membersSection.tap();
                break;
            case 'Cities':
                await this.citiesSection.tap();
                break;
            case 'Animation':
                await this.animationSection.tap();
                break;
            case 'Extras':
                await this.extrasSection.tap();
                break;
            default:
                assert.fail(`The entered section ${section} is an invalid Home section`);
        }

    }
}
export default new HomePage();