/*
* 接口没定好，前端对接口数据进行了处理
* */

import axios from 'axios'

//api 资源路径
const path = 'http://www.swu-rise.net.cn/api/index.php/';

//首页轮播图
export function getIndexInfor() {
    return axios.get(`${path}sliderShow`)
}

//菜单文章列表
export function getList(item) {
    switch (item) {
        case 'seminar':
            return new Promise((resolve)=> {
                axios.get(`${path}list/xsbg`).then(res => {
                    resolve([{title: 'Seminars', tableData: res.data}])
                })
            })
        case 'news':
            return new Promise((resolve)=> {
                axios.get(`${path}list/zxdt`).then(res => {
                   resolve([{title:'News', tableData: res.data}])
                })
            })
        case 'join':
            return new Promise((resolve)=> {
                axios.get(`${path}list/znxs`).then(res => {
                    resolve([{title:'Join us', tableData: res.data}])
                })
            })
        case 'exchange':
            return new Promise((resolve)=> {
                const exchange = axios.get(`${path}list/xsjl`);
                const missions = axios.get(`${path}list/xsjl/sublist/cf`);
                const visitors = axios.get(`${path}list/xsjl/sublist/lf`);
                Promise.all([exchange, missions, visitors]).then(res => {
                    resolve([
                        { title: 'Exchanges', tableData: res[0].data },
                        { title: 'Missions', tableData: res[1].data },
                        { title: 'Visitors', tableData: res[2].data }
                    ])
                })

            })
        case 'conference':
            return new Promise((resolve)=> {
                const conference = axios.get(`${path}list/xshy`);
                const domestic = axios.get(`${path}list/xsjl/sublist/gnhy`);
                const foreign = axios.get(`${path}list/xsjl/sublist/gjhy`);
                Promise.all([conference, domestic, foreign]).then(res => {
                    resolve([
                        { title: 'Conference', tableData: res[0].data },
                        { title: 'Domestic', tableData: res[1].data },
                        { title: 'Foreign', tableData: res[2].data }
                    ])
                })

            })
    }
}

//获取文章详情
export function getArticle(id) {
    return axios.get(`${path}article/${id}`)
}

//获取people列表
export function getPeopleList() {
    return new Promise((resolve)=> {
        const staff = axios.get(`${path}staff/zxjs`);
        const ps = axios.get(`${path}staff/zxxsMD`);
        const us = axios.get(`${path}staff/zxxsU`);
        Promise.all([staff, ps, us]).then((res=> {
            const staff = res[0].data.filter(item => { return item.class == 'zxjs'});
            const ap = res[0].data.filter(item => { return item.class == 'jzjs'});
            resolve([
                { class: 'Staff', list: staff, type: 'teacher' },
                { class: 'Adjunct Professors', list: ap, type: 'teacher' },
                { class: 'Postgraduate Students', list: res[1].data, type:'student'},
                { class: 'Undergraduates', list: res[2].data, type: 'student'}
            ])
        }))
    })
}

//获取个人信息详情
export function getPeopleDetail(item, id) {
    return new Promise((resolve)=> {
        axios.get(`${path}member/${item}/${id}`).then(res => {
            const rs = res.data[0];
            resolve({
                basic: rs,
                detail: combineInfo(rs)
            })
        })
    })

}

function combineInfo(rs) {
    if(typeof rs === 'object'){
        const detail={};
        if(rs.introduce) {
            detail['Biography'] = rs.introduce;
        }
        if(rs.intersting) {
            detail['Research interest'] = rs.intersting;
        }
        if(rs.project) {
            detail['Projects'] = rs.project;
        }
        if(rs.achevement) {
            detail['Achievements'] = rs.achevement;
        }
        if(rs.activity) {
            detail['Professional Activities'] = rs.activity;
        }
        if(rs.papers) {
            detail['Selected Publications'] = rs.papers;
        }
        if(rs.report) {
            detail['Thesis&Reports'] = rs.report;
        }
        return detail;
    }
}
