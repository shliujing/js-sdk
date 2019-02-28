  // $.ajax({url: "/api/uptoken", success: function(res){
  //   var token = res.uptoken;
  //   var domain = res.domain;
  //   var config = {
  //     useCdnDomain: true,
  //     disableStatisticsReport: false,
  //     retryCount: 6,
  //     region: qiniu.region.z0
  //   };
  //   var putExtra = {
  //     fname: "",
  //     params: {},
  //     mimeType: null
  //   };
  //   $(".nav-box")
  //     .find("a")
  //     .each(function(index) {
  //       $(this).on("click", function(e) {
  //         switch (e.target.name) {
  //           case "h5":
  //             uploadWithSDK(token, putExtra, config, domain);
  //             break;
  //           case "expand":
  //             uploadWithOthers(token, putExtra, config, domain);
  //             break;
  //           case "directForm":
  //             uploadWithForm(token, putExtra, config);
  //             break;
  //           default:
  //             "";
  //         }
  //       });
  //     });
  //   imageControl(domain);
  //   uploadWithSDK(token, putExtra, config, domain);
  // }})


$(function(res){
    var token = "c1HeRi-0zzp-vvIySFCmsShxapOdiKFoBeziDSkz:-UAEyOz01om_jzeQLQiqBN-obS4=:eyJzY29wZSI6InRlc3QtcHViOnRlc3QtaWRjYXJkLmpwZyIsImRlYWRsaW5lIjoxNTUxMzM3ODQzfQ==";
    var domain = "http://test-pub.iamlj.com/";
    var config = {
      useCdnDomain: true,
      disableStatisticsReport: false,
      retryCount: 6,
      region: qiniu.region.z0
    };
    var putExtra = {
      fname: "",
      params: {},
      mimeType: null
    };
    $(".nav-box")
      .find("a")
      .each(function(index) {
        $(this).on("click", function(e) {
          switch (e.target.name) {
            case "h5":
              uploadWithSDK(token, putExtra, config, domain);
              break;
            case "expand":
              uploadWithOthers(token, putExtra, config, domain);
              break;
            case "directForm":
              uploadWithForm(token, putExtra, config);
              break;
            default:
              "";
          }
        });
      });
    imageControl(domain);
    uploadWithSDK(token, putExtra, config, domain);
  });