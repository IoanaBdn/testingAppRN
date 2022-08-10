import moment from 'moment';

class ReportGeneration {
    getReportValues(deviceOS, executionStart, executionEnd) {
        const isIOS = deviceOS === 'ios' ? true : false;
        deviceOS = isIOS ? 'iOS' : 'Android';
        const deviceName = isIOS ? 'iPhone 12 Pro' : 'Pixel XL';
        const deviceOSVersion = isIOS ? '14.5' : '10';

        return JSON.stringify({
            jsonDir: '.tmp/',
            reportPath: 'reports/',
            pageTitle: `Pinnacle QA Academy - ${deviceOS} Test Automation Report`,
            reportName: `Pinnacle QA Academy - ${deviceOS} Test Automation Report: Regression Test Suite`,
            displayDuration: true,
            metadata: {
                device: deviceName,
                platform: {
                    name: deviceOS,
                    version: deviceOSVersion
                },
                app: {
                    name: 'membersApp',
                    version: '1.0.0'
                }
            },
            customData: {
                title: 'Run Information',
                data: [
                    { label: 'Execution Date', value: moment(executionStart).format('dddd, Do of MMMM YYYY') },
                    { label: 'Execution Start Time', value: moment(executionStart).format('HH:mm:ss') },
                    { label: 'Execution End Time', value: moment(executionEnd).format('HH:mm:ss') },
                    { label: 'Execution Duration', value: moment.utc(moment(executionEnd, 'DD/MM/YYYY HH:mm:ss')
                        .diff(moment(executionStart, 'DD/MM/YYYY HH:mm:ss'))).format('HH:mm:ss') },
                    { label: 'Environment', value: 'UAT' },
                    { label: 'Framework', value: 'Detox' }
                ]
            }
        });
    }
}

export default new ReportGeneration();