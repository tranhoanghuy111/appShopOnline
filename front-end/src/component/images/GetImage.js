
const images = {
    nuocngot:require('../images/nuocngot.jpg'),
    xaphong:require('../images/xaphong.jpg'),

    coopsmile:require('../images/CoopSmile/coopsmile.jpg'),
    gaothom: require('../images/CoopSmile/gaothom.jpg'),
    knor: require('../images/CoopSmile/knor.jpg'),
    nuocgiat: require('../images/CoopSmile/nuocgiat.jpg'),
    nuoclausan: require('../images/CoopSmile/nuoclausan.jpg'),
    
    tiki:require('../images/TikiBook/tiki.jpg'),
    cheetahs: require('../images/TikiBook/cheetahs.jpg'),
    thestonecvtter: require('../images/TikiBook/thestonecvtter.jpg'),
    cuocdoi: require('../images/TikiBook/cuocdoi.jpg'),
    giacmo: require('../images/TikiBook/giacmo.jpg'),
    haisophan: require('../images/TikiBook/haisophan.jpg'),
    haivandam: require('../images/TikiBook/haivandam.jpg'),

    bhx:require('../images/BHX/bhx.jpg'),
    vai: require('../images/BHX/vai.jpg'),
    thitca: require('../images/BHX/thitca.jpg'),
    thitga: require('../images/BHX/thitga.jpg'),
    thitheo: require('../images/BHX/thitheo.jpg'),
    thitbaroi: require('../images/BHX/thitbaroi.jpg'),
    thitcahoi: require('../images/BHX/thitcahoi.jpg'),
    dautay: require('../images/BHX/dautay.jpg'),

    lavie:require('../images/Lavie/lavie.jpg'),
    nuoc: require('../images/Lavie/nuoc.jpg'),
    nuocdao: require('../images/Lavie/nuocdao.jpg'),
    nuocchanh: require('../images/Lavie/nuocchanh.jpg'),
    thungnuoc: require('../images/Lavie/thungnuoc.jpg'),

    tigerlogo:require('../images/Tiger/tigerlogo.jpg'),
    tiger: require('../images/Tiger/tiger.jpg'),
    tigerbac: require('../images/Tiger/tigerbac.jpg'),
    heniken: require('../images/Tiger/heniken.jpg'),
    strongbow: require('../images/Tiger/strongbow.jpg'),

    vinamilk:require('../images/Vinamilk/vinamilk.jpg'),
    thungsua: require('../images/Vinamilk/thungsua.jpg'),
    locsua: require('../images/Vinamilk/locsua.jpg'),
    lonsua: require('../images/Vinamilk/lonsua.jpg'),
}
const GetImage = (image) => {
    if(!image)
        return null
    return images[image];
}
export default GetImage