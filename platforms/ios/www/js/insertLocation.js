function insertLocation() {
    var url = "https://myphotos.rfsolutionit.com.br/services/insertLocation"

    var convertTP = posicaoVendedor.timeposition
    convertTP = convertTP.toString().replace(/[^\d]+/g,'')
    
    MobileUI.ajax.post(url).send()
        .set('Authorization', token)
        .query('groid=' + '0')
        .query('timeposition=' + convertTP)
        .query('longitude=' + posicaoVendedor.lng)
        .query('latitude=' + posicaoVendedor.lat)
        .query('accuracy=' + posicaoVendedor.accuracy) 
        .query('vfuid=' + usuario.userid)
        .end(returnInsertLocation)
}

function returnInsertLocation(error, res) {
    
    if (error) {
        return console.log(res.body)
    }

    return res.body
}
