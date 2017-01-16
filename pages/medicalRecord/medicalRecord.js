Page({
    data:{
        array:["2016-12-21","2016-12-30","2017-01-03"],
        index:0,
        healthData:[
            {
            topic: "风湿1" ,
            patientRequirement: "请求治疗" ,
            patientSituation:"病重",
            evaluation:"需要进行手术",
            solution:"手术",
            trans:"是",
            },
            {
            topic: "风湿2" ,
            patientRequirement: "请求治疗" ,
            patientSituation:"病重",
            evaluation:"需要进行手术",
            solution:"手术",
            trans:"是",
            },
            {
            topic: "风湿3" ,
            patientRequirement: "请求治疗" ,
            patientSituation:"病重",
            evaluation:"需要进行手术",
            solution:"手术",
            trans:"是",
            },
        ]      
    },
    bindPickerChange:function(e) {
        this.setData({
            index:e.detail.value
        });
    },
    onReady:function() {
        
    }
})