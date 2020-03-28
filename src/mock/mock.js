import Mock from 'mockjs'

Mock.mock('/login',(options) =>{
    console.log(options.body)
    return options.body
})
Mock.mock('/regist', (options) =>{
    console.log(options.body)
    return options.body

})
Mock.mock('/home', (options) => {
  console.log(options.body)
  return options.body
})
Mock.mock('/joblist/favor', (options) => {
  console.log(options.body)
  return options.body
})
Mock.mock('/joblist', (options) => {
  console.log(options.body)
  return options.body
})
Mock.mock('./static/data/job.json',{
    "message": [
        {
          "id": 0,
          "jobname": "java工程师",
          "salary": "10K",
          "place": "上海",
          "experience": "1-3年",
          "academic": "本科",
          "company": "阿里巴巴",
          "stage": "已上市",
          "kind": "互联网",
          "hr": "金先生",
          "headimg": "./static/data/images/3.jpg",
          "time": "2020-1-17",
          "department": "技术部门",
          "jobdescription":"1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
          "jobneed": "1. 技术能力扎实，理解IO、多线程、集合、分布式等基础框架，熟悉Servlet、 Spring、MyBatis、Velocity开发，熟悉Linux操作系统和常用数据库，对于用过的 开源框架，能了解到它的原理和机制，有一定线上故障排查经验；2. 具有良好的业务敏感度和优秀的业务分析技能。能够开发创新而实际的分析方法以解 决复杂的商业问题。"
       

        },
        {
          "id": 1,
          "jobname": "前端",
          "salary": "10K",
          "place": "上海",
          "experience": "1-3年",
          "academic": "本科",
          "company": "ba巴巴",
          "stage": "已上市",
          "kind": "互联网",
          "hr": "金先生",
          "headimg": "./static/data/images/3.jpg",
          "time": "2020-1-17",
          "department": "技术部门",
          "jobdescription":"1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
          "jobneed": "1. 技术能力扎实，理解IO、多线程、集合、分布式等基础框架，熟悉Servlet、 Spring、MyBatis、Velocity开发，熟悉Linux操作系统和常用数据库，对于用过的 开源框架，能了解到它的原理和机制，有一定线上故障排查经验；2. 具有良好的业务敏感度和优秀的业务分析技能。能够开发创新而实际的分析方法以解 决复杂的商业问题。"
       
        },
        {
            "id": 2,
            "jobname": "工程师",
            "salary": "10K",
            "place": "上海",
            "experience": "1-3年",
            "academic": "博士",
            "company": "ba里巴巴",
            "stage": "已上市",
            "kind": "娱乐",
            "hr": "金先生",
            "headimg": "./static/data/images/3.jpg",
            "time": "2020-1-17",
            "department": "技术部门",
            "jobdescription":"1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
            "jobneed": "1. 技术能力扎实，理解IO、多线程、集合、分布式等基础框架，熟悉Servlet、 Spring、MyBatis、Velocity开发，熟悉Linux操作系统和常用数据库，对于用过的 开源框架，能了解到它的原理和机制，有一定线上故障排查经验；2. 具有良好的业务敏感度和优秀的业务分析技能。能够开发创新而实际的分析方法以解 决复杂的商业问题。"
         
          },
          {
            "id": 3,
            "jobname": "UI设计师",
            "salary": "10K",
            "place": "杭州",
            "experience": "1-3年",
            "academic": "本科",
            "company": "阿里巴巴",
            "stage": "已上市",
            "kind": "互联网",
            "hr": "金先生",
            "headimg": "./static/data/images/3.jpg",
            "time": "2020-1-17",
            "department": "技术部门",
            "jobdescription":"1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
            "jobneed": "1. 技术能力扎实，理解IO、多线程、集合、分布式等基础框架，熟悉Servlet、 Spring、MyBatis、Velocity开发，熟悉Linux操作系统和常用数据库，对于用过的 开源框架，能了解到它的原理和机制，有一定线上故障排查经验；2. 具有良好的业务敏感度和优秀的业务分析技能。能够开发创新而实际的分析方法以解 决复杂的商业问题。"
         
          },
          {
            "id": 4,
            "jobname": "java工程师",
            "salary": "10K",
            "place": "上海",
            "experience": "1-3年",
            "academic": "本科",
            "company": "阿里巴巴",
            "stage": "已上市",
            "kind": "互联网",
            "hr": "金先生",
            "headimg": "./static/data/images/3.jpg",
            "time": "2020-1-17",
            "department": "技术部门",
            "jobdescription":"1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
            "jobneed": "1. 技术能力扎实，理解IO、多线程、集合、分布式等基础框架，熟悉Servlet、 Spring、MyBatis、Velocity开发，熟悉Linux操作系统和常用数据库，对于用过的 开源框架，能了解到它的原理和机制，有一定线上故障排查经验；2. 具有良好的业务敏感度和优秀的业务分析技能。能够开发创新而实际的分析方法以解 决复杂的商业问题。"
         
          },
          {
            "id": 5,
            "jobname": "java工程师",
            "salary": "10K",
            "place": "上海",
            "experience": "1-3年",
            "academic": "本科",
            "company": "阿里巴巴",
            "stage": "已上市",
            "kind": "互联网",
            "hr": "金先生",
            "headimg": "./static/data/images/3.jpg",
            "time": "2020-1-17",
            "department": "技术部门",
            "jobdescription":"1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
            "jobneed": "1. 技术能力扎实，理解IO、多线程、集合、分布式等基础框架，熟悉Servlet、 Spring、MyBatis、Velocity开发，熟悉Linux操作系统和常用数据库，对于用过的 开源框架，能了解到它的原理和机制，有一定线上故障排查经验；2. 具有良好的业务敏感度和优秀的业务分析技能。能够开发创新而实际的分析方法以解 决复杂的商业问题。"
         
          },
          {
            "id": 6,
            "jobname": "java工程师",
            "salary": "10K",
            "place": "上海",
            "experience": "1-3年",
            "academic": "本科",
            "company": "阿里巴巴",
            "stage": "已上市",
            "kind": "互联网",
            "hr": "金先生",
            "headimg": "./static/data/images/3.jpg",
            "time": "2020-1-17",
            "department": "技术部门",
            "jobdescription":"1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
            "jobneed": "1. 技术能力扎实，理解IO、多线程、集合、分布式等基础框架，熟悉Servlet、 Spring、MyBatis、Velocity开发，熟悉Linux操作系统和常用数据库，对于用过的 开源框架，能了解到它的原理和机制，有一定线上故障排查经验；2. 具有良好的业务敏感度和优秀的业务分析技能。能够开发创新而实际的分析方法以解 决复杂的商业问题。"
         
          },
          {
            "id": 7,
            "jobname": "java工程师",
            "salary": "10K",
            "place": "上海",
            "experience": "1-3年",
            "academic": "本科",
            "company": "阿里巴巴",
            "stage": "已上市",
            "kind": "互联网",
            "hr": "金先生",
            "headimg": "./static/data/images/3.jpg",
            "time": "2020-1-17",
            "department": "技术部门",
            "jobdescription":"1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
            "jobneed": "1. 技术能力扎实，理解IO、多线程、集合、分布式等基础框架，熟悉Servlet、 Spring、MyBatis、Velocity开发，熟悉Linux操作系统和常用数据库，对于用过的 开源框架，能了解到它的原理和机制，有一定线上故障排查经验；2. 具有良好的业务敏感度和优秀的业务分析技能。能够开发创新而实际的分析方法以解 决复杂的商业问题。"
         
          },
          {
            "id": 8,
            "jobname": "java工程师",
            "salary": "10K",
            "place": "上海",
            "experience": "1-3年",
            "academic": "本科",
            "company": "阿里巴巴",
            "stage": "已上市",
            "kind": "互联网",
            "hr": "金先生",
            "headimg": "./static/data/images/3.jpg",
            "time": "2020-1-17",
            "department": "技术部门",
            "jobdescription":"1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
            "jobneed": "1. 技术能力扎实，理解IO、多线程、集合、分布式等基础框架，熟悉Servlet、 Spring、MyBatis、Velocity开发，熟悉Linux操作系统和常用数据库，对于用过的 开源框架，能了解到它的原理和机制，有一定线上故障排查经验；2. 具有良好的业务敏感度和优秀的业务分析技能。能够开发创新而实际的分析方法以解 决复杂的商业问题。"
         
          }]

})
Mock.mock('./static/data/company.json',{
    "message": [
        {
          "id": 0,
          "logourl": "./static/data/images/baidu.jpg",
          "company": "巴里巴巴",
          "stage": "已上市",
          "kind": "互联网",
          "scale": "1000人以上" ,        
          "place": "上海",
          "url": "http://www.baidu.com",
          "comintroduce":
            "阿里巴巴集团的使命是让天下没有难做的生意。我们旨在赋能企业改变营销、销售和经营的方式。我们为商家、品牌及其他企业提供基本的互联网基础设施以及营销平台，让其可借助互联网的力量与用户和客户互动。我们的业务包括核心电商、云计算、数字媒体和娱乐以及创新项目和其他业务。我们并通过子公司菜鸟网络及所投资的关",
          "address": "杭州余杭区阿里巴巴西溪园区"
        },
        {
          "id": 1,
          "logourl":  "./static/data/images/baidu.jpg",
          "company": "阿里巴巴",
          "stage": "已上市",
          "kind": "互联网",
          "scale": "1000人以上",
          "place": "上海",
          "url": "http://www.baidu.com",
          "comintroduce":
            "阿里巴巴集团的使命是让天下没有难做的生意。我们旨在赋能企业改变营销、销售和经营的方式。我们为商家、品牌及其他企业提供基本的互联网基础设施以及营销平台，让其可借助互联网的力量与用户和客户互动。我们的业务包括核心电商、云计算、数字媒体和娱乐以及创新项目和其他业务。我们并通过子公司菜鸟网络及所投资的关",
          "address": "杭州余杭区阿里巴巴西溪园区"
        },
        {
          "id": 2,
          "logourl":  "./static/data/images/baidu.jpg",
          "company": "阿里巴巴",
          "stage": "已上市",
          "kind": "互联网",
          "scale": "1000人以上",
          "place": "上海",
          "url": "http://www.baidu.com",
          "comintroduce":
            "阿里巴巴集团的使命是让天下没有难做的生意。我们旨在赋能企业改变营销、销售和经营的方式。我们为商家、品牌及其他企业提供基本的互联网基础设施以及营销平台，让其可借助互联网的力量与用户和客户互动。我们的业务包括核心电商、云计算、数字媒体和娱乐以及创新项目和其他业务。我们并通过子公司菜鸟网络及所投资的关",
          "address": "杭州余杭区阿里巴巴西溪园区"
        },
        {
          "id": 3,
          "logourl": "./static/data/images/baidu.jpg",
          "company": "阿里巴巴",
          "stage": "已上市",
          "kind": "互联网",
          "scale": "1000人以上",
          "place": "上海",
          "url": "http://www.baidu.com",
          "comintroduce":
            "阿里巴巴集团的使命是让天下没有难做的生意。我们旨在赋能企业改变营销、销售和经营的方式。我们为商家、品牌及其他企业提供基本的互联网基础设施以及营销平台，让其可借助互联网的力量与用户和客户互动。我们的业务包括核心电商、云计算、数字媒体和娱乐以及创新项目和其他业务。我们并通过子公司菜鸟网络及所投资的关",
          "address": "杭州余杭区阿里巴巴西溪园区"
        },
        {
          "id": 4,
          "logourl": "./static/data/images/baidu.jpg",
          "company": "阿里巴巴",
          "stage": "已上市",
          "kind": "互联网",
          "scale": "1000人以上",
          "place": "上海",
          "url": "http://www.baidu.com",
          "comintroduce":
            "阿里巴巴集团的使命是让天下没有难做的生意。我们旨在赋能企业改变营销、销售和经营的方式。我们为商家、品牌及其他企业提供基本的互联网基础设施以及营销平台，让其可借助互联网的力量与用户和客户互动。我们的业务包括核心电商、云计算、数字媒体和娱乐以及创新项目和其他业务。我们并通过子公司菜鸟网络及所投资的关",
          "address": "杭州余杭区阿里巴巴西溪园区"
        },
        {
          "id": 5,
          "logourl": "./static/data/images/baidu.jpg",
          "company": "阿里巴巴",
          "stage": "已上市",
          "kind": "互联网",
          "scale": "1000人以上",
          "place": "上海",
          "url": "http://www.baidu.com",
          "comintroduce":
            "阿里巴巴集团的使命是让天下没有难做的生意。我们旨在赋能企业改变营销、销售和经营的方式。我们为商家、品牌及其他企业提供基本的互联网基础设施以及营销平台，让其可借助互联网的力量与用户和客户互动。我们的业务包括核心电商、云计算、数字媒体和娱乐以及创新项目和其他业务。我们并通过子公司菜鸟网络及所投资的关",
          "address": "杭州余杭区阿里巴巴西溪园区"
        },
        {
          "id": 6,
          "logourl": "./static/data/images/baidu.jpg",
          "company": "字节跳动",
          "stage": "已上市",
          "kind": "互联网",
          "scale": "1000人以上",
          "place": "上海",
          "url": "http://www.baidu.com",
          "comintroduce":
            "阿里巴巴集团的使命是让天下没有难做的生意。我们旨在赋能企业改变营销、销售和经营的方式。我们为商家、品牌及其他企业提供基本的互联网基础设施以及营销平台，让其可借助互联网的力量与用户和客户互动。我们的业务包括核心电商、云计算、数字媒体和娱乐以及创新项目和其他业务。我们并通过子公司菜鸟网络及所投资的关",
          "address": "杭州余杭区阿里巴巴西溪园区"
        },
        {
          "id": 7,
          "logourl": "./static/data/images/baidu.jpg",
          "company": "字节跳动",
          "stage": "已上市",
          "kind": "互联网",
          "scale": "1000人以上",
          "place": "上海",
          "url": "http://www.baidu.com",
          "comintroduce":
            "阿里巴巴集团的使命是让天下没有难做的生意。我们旨在赋能企业改变营销、销售和经营的方式。我们为商家、品牌及其他企业提供基本的互联网基础设施以及营销平台，让其可借助互联网的力量与用户和客户互动。我们的业务包括核心电商、云计算、数字媒体和娱乐以及创新项目和其他业务。我们并通过子公司菜鸟网络及所投资的关",
          "address": "杭州余杭区阿里巴巴西溪园区"
        },
        {
          "id": 8,
          "logourl": "./static/data/images/baidu.jpg",
          "company": "阿里巴巴",
          "stage": "已上市",
          "kind": "互联网",
          "scale": "1000人以上",
          "place": "上海",
          "url": "http://www.baidu.com",
          "comintroduce":
            "阿里巴巴集团的使命是让天下没有难做的生意。我们旨在赋能企业改变营销、销售和经营的方式。我们为商家、品牌及其他企业提供基本的互联网基础设施以及营销平台，让其可借助互联网的力量与用户和客户互动。我们的业务包括核心电商、云计算、数字媒体和娱乐以及创新项目和其他业务。我们并通过子公司菜鸟网络及所投资的关",
          "address": "杭州余杭区阿里巴巴西溪园区"
        },
        {
          "id": 9,
          "logourl": "./static/data/images/baidu.jpg",
          "company": "腾讯",
          "stage": "已上市",
          "kind": "互联网",
          "scale": "1000人以上",
          "place": "上海",
          "url": "http://www.baidu.com",
          "comintroduce":
            "阿里巴巴集团的使命是让天下没有难做的生意。我们旨在赋能企业改变营销、销售和经营的方式。我们为商家、品牌及其他企业提供基本的互联网基础设施以及营销平台，让其可借助互联网的力量与用户和客户互动。我们的业务包括核心电商、云计算、数字媒体和娱乐以及创新项目和其他业务。我们并通过子公司菜鸟网络及所投资的关",
          "address": "杭州余杭区阿里巴巴西溪园区"
        },
        {
          "id": 10,
          "logourl": "./static/data/images/baidu.jpg",
          "company": "腾讯",
          "stage": "已上市",
          "kind": "互联网",
          "scale": "1000人以上",
          "place": "上海",
          "url": "http://www.baidu.com",
          "comintroduce":
            "阿里巴巴集团的使命是让天下没有难做的生意。我们旨在赋能企业改变营销、销售和经营的方式。我们为商家、品牌及其他企业提供基本的互联网基础设施以及营销平台，让其可借助互联网的力量与用户和客户互动。我们的业务包括核心电商、云计算、数字媒体和娱乐以及创新项目和其他业务。我们并通过子公司菜鸟网络及所投资的关",
          "address": "杭州余杭区阿里巴巴西溪园区"
        },
        {
          "id": 11,
          "logourl": "./static/data/images/baidu.jpg",
          "company": "阿里巴巴",
          "stage": "已上市",
          "kind": "互联网",
          "scale": "1000人以上",
          "place": "上海",
          "url": "http://www.baidu.com",
          "comintroduce":
            "阿里巴巴集团的使命是让天下没有难做的生意。我们旨在赋能企业改变营销、销售和经营的方式。我们为商家、品牌及其他企业提供基本的互联网基础设施以及营销平台，让其可借助互联网的力量与用户和客户互动。我们的业务包括核心电商、云计算、数字媒体和娱乐以及创新项目和其他业务。我们并通过子公司菜鸟网络及所投资的关",
          "address": "杭州余杭区阿里巴巴西溪园区"
        }



      ]
})
Mock.mock('./static/data/candidates.json',{
    "message":[
        {
        "id": 0,
        "name": "张三三",
        "sex": "男",
        "salary": "10K",
        "desiredjob": "IT",
        "place": "上海",
        "experience": "应届毕业生",
        "academic": "本科",       
        "birth": "1990-3-4",
        "time": "2020-1-17",
        "headimg": "./static/data/images/3.jpg",
        "nationality": "中国",
        "email": "1234@qq.com",
        "telephone": "12345678901",
        "desiredcity": "杭州",
        "school": "安徽科技学院",
        "subject": "计算机专业",
        "projectname": "IT招聘网站",
        "duty": "总揽全局",
        "starttime": "20200101",
        "endtime": "20200230",
        "description":
          "1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
        "assessment":
          "本人性格开朗、稳重、有活力，待人热情、真诚。有很强的专业的职业道德，专业基础知识扎实。工作认真负责，主动承担责任，积极与周围工作环境建立良好的工作关系，并具有一定的资源协调能力。与同事，其它部门各极配合，有较强的组织能力、实际动手能力和团体协作精神。能迅速的适应各种环境，并融合其中。",
  
        "date1": "2016-09-01",
        "date2": "2020-06-30"
      },
      {
        "id": 1,
        "name": "张三三",
        "sex": "男",
        "salary": "10K",
        "desiredjob": "技术支持",
        "place": "上海",
        "experience": "1-3年",
        "academic": "本科",
        "stage": "已上市",
        "kind": "互联网",
        "birth": "1990-3-4",
        "time": "2020-1-17",
        "headimg": "./static/data/images/3.jpg",
        "nationality": "中国",
        "email": "1234@qq.com",
        "telephone": "12345678901",
        "desiredcity": "杭州",
        "school": "安徽科技学院",
        "subject": "计算机专业",
        "projectname": "IT招聘网站",
        "duty": "总揽全局",
        "starttime": "20200101",
        "endtime": "20200230",
        "description":
          "1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
        "assessment":
          "本人性格开朗、稳重、有活力，待人热情、真诚。有很强的专业的职业道德，专业基础知识扎实。工作认真负责，主动承担责任，积极与周围工作环境建立良好的工作关系，并具有一定的资源协调能力。与同事，其它部门各极配合，有较强的组织能力、实际动手能力和团体协作精神。能迅速的适应各种环境，并融合其中。",
  
        "date1": "2016-09-01",
        "date2": "2020-06-30"
      },
      {
        "id": 2,
        "name": "张三三",
        "sex": "男",
        "salary": "10K",
        "desiredjob": "技术支持",
        "place": "上海",
        "experience": "1-3年",
        "academic": "本科",
        "stage": "已上市",
        "kind": "互联网",
        "birth": "1990-3-4",
        "time": "2020-1-17",
        "headimg": "./static/data/images/3.jpg",
        "nationality": "中国",
        "email": "1234@qq.com",
        "telephone": "12345678901",
        "desiredcity": "杭州",
        "school": "安徽科技学院",
        "subject": "计算机专业",
        "projectname": "IT招聘网站",
        "duty": "总揽全局",
        "starttime": "20200101",
        "endtime": "20200230",
        "description":
          "1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
        "assessment":
          "本人性格开朗、稳重、有活力，待人热情、真诚。有很强的专业的职业道德，专业基础知识扎实。工作认真负责，主动承担责任，积极与周围工作环境建立良好的工作关系，并具有一定的资源协调能力。与同事，其它部门各极配合，有较强的组织能力、实际动手能力和团体协作精神。能迅速的适应各种环境，并融合其中。",
  
        "date1": "2016-09-01",
        "date2": "2020-06-30"
      },
      {
        "id": 3,
        "name": "张三三",
        "sex": "女",
        "salary": "10K",
        "desiredjob": "技术支持",
        "place": "上海",
        "experience": "1-3年",
        "academic": "本科",
        "stage": "已上市",
        "kind": "互联网",
        "birth": "1990-3-4",
        "time": "2020-1-17",
        "headimg": "./static/data/images/3.jpg",
        "nationality": "中国",
        "email": "1234@qq.com",
        "telephone": "12345678901",
        "desiredcity": "杭州",
        "school": "安徽科技学院",
        "subject": "计算机专业",
        "projectname": "IT招聘网站",
        "duty": "总揽全局",
        "starttime": "20200101",
        "endtime": "20200230",
        "description":
          "1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
        "assessment":
          "本人性格开朗、稳重、有活力，待人热情、真诚。有很强的专业的职业道德，专业基础知识扎实。工作认真负责，主动承担责任，积极与周围工作环境建立良好的工作关系，并具有一定的资源协调能力。与同事，其它部门各极配合，有较强的组织能力、实际动手能力和团体协作精神。能迅速的适应各种环境，并融合其中。",
  
        "date1": "2016-09-01",
        "date2": "2020-06-30"
      },
      {
        "id": 4,
        "name": "张三三",
        "sex": "男",
        "salary": "10K",
        "desiredjob": "技术支持",
        "place": "上海",
        "experience": "1-3年",
        "academic": "本科",
        "stage": "已上市",
        "kind": "互联网",
        "birth": "1990-3-4",
        "time": "2020-1-17",
        "headimg": "./static/data/images/3.jpg",
        "nationality": "中国",
        "email": "1234@qq.com",
        "telephone": "12345678901",
        "desiredcity": "杭州",
        "school": "安徽科技学院",
        "subject": "计算机专业",
        "projectname": "IT招聘网站",
        "duty": "总揽全局",
        "starttime": "20200101",
        "endtime": "20200230",
        "description":
          "1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
        "assessment":
          "本人性格开朗、稳重、有活力，待人热情、真诚。有很强的专业的职业道德，专业基础知识扎实。工作认真负责，主动承担责任，积极与周围工作环境建立良好的工作关系，并具有一定的资源协调能力。与同事，其它部门各极配合，有较强的组织能力、实际动手能力和团体协作精神。能迅速的适应各种环境，并融合其中。",
  
        "date1": "2016-09-01",
        "date2": "2020-06-30"
      },
      {
        "id": 5,
        "name": "张三三",
        "sex": "男",
        "salary": "10K",
        "desiredjob": "技术支持",
        "place": "上海",
        "experience": "1-3年",
        "academic": "本科",
        "stage": "已上市",
        "kind": "互联网",
        "birth": "1990-3-4",
        "time": "2020-1-17",
        "headimg": "./static/data/images/3.jpg",
        "nationality": "中国",
        "email": "1234@qq.com",
        "telephone": "12345678901",
        "desiredcity": "杭州",
        "school": "安徽科技学院",
        "subject": "计算机专业",
        "projectname": "IT招聘网站",
        "duty": "总揽全局",
        "starttime": "20200101",
        "endtime": "20200230",
        "description":
          "1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
        "assessment":
          "本人性格开朗、稳重、有活力，待人热情、真诚。有很强的专业的职业道德，专业基础知识扎实。工作认真负责，主动承担责任，积极与周围工作环境建立良好的工作关系，并具有一定的资源协调能力。与同事，其它部门各极配合，有较强的组织能力、实际动手能力和团体协作精神。能迅速的适应各种环境，并融合其中。",
  
        "date1": "2016-09-01",
        "date2": "2020-06-30"
      },
      {
        "id": 6,
        "name": "张三三",
        "sex": "男",
        "salary": "10K",
        "desiredjob": "技术支持",
        "place": "上海",
        "experience": "1-3年",
        "academic": "本科",
        "stage": "已上市",
        "kind": "互联网",
        "birth": "1990-3-4",
        "time": "2020-1-17",
        "headimg": "./static/data/images/3.jpg",
        "nationality": "中国",
        "email": "1234@qq.com",
        "telephone": "12345678901",
        "desiredcity": "杭州",
        "school": "安徽科技学院",
        "subject": "计算机专业",
        "projectname": "IT招聘网站",
        "duty": "总揽全局",
        "starttime": "20200101",
        "endtime": "20200230",
        "description":
          "1. 承担核心功能代码编写，重点项目开发，确保技术方案能够按计划要求，高质量的完 成；2. 深入理解业务需求，分析和发现系统的优化点，负责推动产品性能和系统优化；3. 解决各类技术难题，系统优化，架构升级，完成平台能力沉淀和组件框架沉淀",
        "assessment":
          "本人性格开朗、稳重、有活力，待人热情、真诚。有很强的专业的职业道德，专业基础知识扎实。工作认真负责，主动承担责任，积极与周围工作环境建立良好的工作关系，并具有一定的资源协调能力。与同事，其它部门各极配合，有较强的组织能力、实际动手能力和团体协作精神。能迅速的适应各种环境，并融合其中。",
  
        "date1": "2016-09-01",
        "date2": "2020-06-30"
      },
      {
        "id": 7,
        "name": "张三三",
        "sex": "男",
        "salary": "10K",
        "desiredjob": "技术支持",
        "place": "上海",
        "experience": "1-3年",
        "academic": "本科",
        "stage": "已上市",
        "kind": "互联网",
        "birth": "1990-3-4",
        "time": "2020-1-17",
        "headimg": "./static/data/images/3.jpg"
      },
      {
        "id": 8,
        "name": "张三三",
        "sex": "男",
        "salary": "10K",
        "desiredjob": "技术支持",
        "place": "上海",
        "experience": "1-3年",
        "academic": "本科",
        "stage": "已上市",
        "kind": "互联网",
        "birth": "1990-3-4",
        "time": "2020-1-17",
        "headimg": "./static/data/images/3.jpg"
      },
      {
        "id": 9,
        "name": "张三三",
        "sex": "男",
        "salary": "10K",
        "desiredjob": "技术支持",
        "place": "上海",
        "experience": "1-3年",
        "academic": "本科",
        "stage": "已上市",
        "kind": "互联网",
        "birth": "1990-3-4",
        "time": "2020-1-17",
        "headimg": "./static/data/images/3.jpg"
      },
      {
        "id": 10,
        "name": "张三三",
        "sex": "男",
        "salary": "10K",
        "desiredjob": "技术支持",
        "place": "上海",
        "experience": "1-3年",
        "academic": "本科",
        "stage": "已上市",
        "kind": "互联网",
        "birth": "1990-3-4",
        "time": "2020-1-17",
        "headimg": "./static/data/images/3.jpg"
      },
      {
        "id": 11,
        "name": "张三三",
        "sex": "男",
        "salary": "10K",
        "desiredjob": "技术支持",
        "place": "上海",
        "experience": "1-3年",
        "academic": "本科",
        "stage": "已上市",
        "kind": "互联网",
        "birth": "1990-3-4",
        "time": "2020-1-17",
        "headimg": "./static/data/images/3.jpg"
      }
    ]
})
Mock.setup({
    timeout: '300-600'
  })