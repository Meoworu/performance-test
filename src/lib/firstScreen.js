export default function performanceTest() {
    let timing = performance.timing,
        readyStart = timing.fetchStart - timing.navigationStart,
        redirectTime = timing.redirectEnd - timing.redirectStart,
        appcacheTime = timing.domainLookupStart - timing.fetchStart,
        unloadEventTime = timing.unloadEventEnd - timing.unloadEventStart,
        lookupDomainTime = timing.domainLookupEnd - timing.domainLookupStart,
        connectTime = timing.connectEnd - timing.connectStart,
        whiteScreenTime = timing.responseStart - timing.navigationStart,
        requestTime = timing.responseEnd - timing.requestStart,
        initDomTreeTime = timing.domInteractive - timing.responseEnd,
        domReadyTime = timing.domComplete - timing.domInteractive,
        loadEventTime = timing.loadEventEnd - timing.loadEventStart,
        loadTime = timing.loadEventEnd - timing.navigationStart
    //   console.log('准备新页面时间耗时: ' + readyStart)
    //   console.log('redirect 重定向耗时: ' + redirectTime)
    //   console.log('Appcache 耗时: ' + appcacheTime)
    //   console.log('unload 前文档耗时: ' + unloadEventTime)
    //   console.log('DNS 查询耗时: ' + lookupDomainTime)
    //   console.log('TCP连接耗时: ' + connectTime)
    //   console.log('白屏时间: ' + whiteScreenTime)
    //   console.log('request请求耗时: ' + requestTime)
    //   console.log('请求完毕至DOM加载: ' + initDomTreeTime)
    //   console.log('解析DOM树耗时: ' + domReadyTime)
    //   console.log('load事件耗时: ' + loadEventTime)
    //   console.log('加载时间耗时: ' + loadTime)
    return {
        readyStart,
        redirectTime,
        appcacheTime,
        unloadEventTime,
        lookupDomainTime,
        connectTime,
        whiteScreenTime,
        requestTime,
        initDomTreeTime,
        domReadyTime,
        loadEventTime,
        loadTime
    }
}
