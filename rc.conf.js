const merge =require('deepmerge');
const wdioConf = require('./wdio.conf');

exports.config = merge(wdioConf.config, {

    baseUrl: 'https://ronydemo.mrbjarke.com/',
//     browserName: 'chrome',
//         'goog:chromeOptions': {
//             args: ['--headless', '--disable-gpu'],
//             },
})