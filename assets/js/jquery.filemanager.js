!function(a){a.fn.filemanager=function(b){function c(a,b,c,d){return c<0&&(c+=a.length),d=void 0!==d?d:a.length,d<0&&(d=d+a.length-c),a.slice(0,c)+b.substr(0,d)+b.slice(d)+a.slice(c+d)}function d(a,b,c,d){var e=0,f=0,g="",h="",i=0,j=0,k=[].concat(a),l=[].concat(b),m=c,n="[object Array]"===Object.prototype.toString.call(l),o="[object Array]"===Object.prototype.toString.call(m);if(m=[].concat(m),"object"==typeof a&&"string"==typeof b){for(g=b,b=[],e=0;e<a.length;e+=1)b[e]=g;g="",l=[].concat(b),n="[object Array]"===Object.prototype.toString.call(l)}for(d&&(this.window[d]=0),e=0,i=m.length;e<i;e++)if(""!==m[e])for(f=0,j=k.length;f<j;f++)g=m[e]+"",h=n?void 0!==l[f]?l[f]:"":l[0],m[e]=g.split(k[f]).join(h),d&&(this.window[d]+=g.split(k[f]).length-1);return o?m:m[0]}function e(a){var b=a.lastIndexOf(".");return-1===b?a:a.substr(0,b)}function f(b){var c=!1,d="",e="";if(a.each(n,function(a,f){if(b==a)return c=!0,d=a,e=f,!1}),c)return b.replace(d,e)}function g(){var b=a("#search",o).val();""===b?a("li",q).not(".parentup").removeClass("hidden"):a("li",q).not(".parentup").find("div.item").each(function(c,d){-1===a(d).find(".name").data("name").toLowerCase().indexOf(b.toLowerCase())?a(d).parent().addClass("hidden"):a(d).parent().removeClass("hidden")})}if(void 0===h)var h={US:{}};h.US={FE_UPLOAD:"Upload Files",FE_CREATE_DIRECTORY:"Create folder",FE_CANCEL:"Cancel",FE_DELETE:"Delete",FE_CLEAR:"Clear",FE_SEARCH_NAME_FILES:"Search files",FE_ADD_FILES:"Add Files",FE_START_UPLOAD:"Start upload",FE_CANCEL_UPLOAD:"Cancel upload",FE_NEW_FOLDER:"New folder",FE_NAME:"Name",FE_CLOSE:"Close",FE_SAVE:"Save",FE_RENAME:"Rename",FE_ENTER_NAME:"Enter name",FE_MAX_FILES_UPLOAD:"Max number of files: ",FE_FILENAME:"Name file:: ",FE_LAST_MODIFIED:"Last modified:: ",FE_SIZE:"Size:: ",FF_PATH:"File path:: ",FE_DELETE_SELECTED:"Delete selected",FE_INSERT_SELECTED:"Insert selected",FE_VIEWS:"Views: ",FE_VIEW_MINIATURE:"View miniature",FE_VIEW_DETAILS:"View details",FE_NOMBRE:"Name",FE_TIPO:"Type",FE_TAMANO:"Size",FE_DATE:"Date",FE_ACTIONS:"Actions",FE_VIEW:"View",FE_DOWNLOAD:"Download",FE_INFORMATION:"Information",FE_BACK:"Back",BE_NEW_FOLDER_CREATED:"Folder created: ",BE_NEW_FOLDER_EXISTED:"Folder existed: ",BE_GETFILEALL_NOT_LEIBLE:"File not readed",BE_GETFILEALL_NOT_PERMITIDO:"File not permitido",BE_GETFILEALL_NOT_EXISTED:"File not existed",BE_UPLOADALL_UPLOADS:"Upload: ",BE_UPLOADALL_NOT_UPLOADS:"Not permitido: ",BE_UPLOAD_MAX_UPLOAD:"Máximo permitido: ",BE_DELETE_DELETED:"File deleted",BE_DELETE_NOT_EXIED:"File no existed",BE_RENAME_MODIFIED:"File modificaded",BE_RENAME_EXISTED:"File existed",BE_RENAME_NOT_EXISTS:"File not existed",BE_RUN_NOT_VALID:"Not valid: ",BE_RENAME_EXT_NOT_EQUALS:"The extension not equal",BE_RENAME_FILENAME_NOT_VALID:"Name file not valid"};var i={url:"../conector.php",languaje:"ES",upload_max:5,view:"thumbs",ext:["jpeg","gif","jpg","png","svg","txt","pdf","odp","ods","odt","rtf","doc","docx","xls","xlsx","ppt","pptx","csv","ogv","mp4","webm","m4v","ogg","mp3","wav","zip","rar"],insertButton:!1,token:null,tokenName:"_token",typeFile:null,datetimeFormat:"DD/MM/YYYY"},j=a.extend({},i,b),k=function(a){a||(a="");for(var b,c=/[?&]([^=#]+)=([^&#]*)/g,d=window.location.href,e={};b=c.exec(d);)"undefined"!==b[2]&&(e[b[1]]=b[2]);return e[a]||""},l=k("lang");""!=l&&(j.languaje="en_GB"==l?"us":l);var m=k("type");""!=m&&(j.typeFile=m);var n={};a.each(h,function(a,b){if(j.languaje.toUpperCase()==a)return n=b,!1}),j.getModalTemplate=function(b){var c={type:"",modal_id:"",header:{title:"Title"},body:"",footer:{ok:"Ok",close:"Close"}},d=a.extend({},c,b),e="";"lg"==d.type&&(e="modal-lg");var f='<div class="modal fade" id="'+d.modal_id+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog '+e+'"><form id="form_popup" action="" method="post"><div class="modal-content">';return d.header&&(f=f+'<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel">'+d.header.title+"</h4></div>"),f=f+'<div class="modal-body">'+d.body+"</div>",d.footer&&(f=f+'<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">'+d.footer.close+'</button><button type="submit" class="btn btn-primary">'+d.footer.ok+"</button></div>"),f+="</div></form></div></div>"};var o=a(this);o.token=Math.floor(65536*(1+Math.random())),o.config={new_folder:"newfolder_popup_"+o.token,upload_popup:"upload_popup_"+o.token,delete_popup:"delete_popup_"+o.token,rename_popup:"rename_popup_"+o.token};var p='<div class="navbar">';p+='<div class="navbar-inner"><div class="container-fluid">',p=p+'<div class="row tooolbar"><div class="col-xs-7 col-sm-5 col-md-4"><button data-target="#'+o.config.upload_popup+'" data-tooltip="tooltip" data-toggle="modal" title="FE_UPLOAD" data-placement="bottom" class="btn btn-default btn-sm "><span aria-hidden="true" class="glyphicon glyphicon-upload"></span><span aria-hidden="true" class="glyphicon glyphicon-file"></span></button><button data-target="#'+o.config.new_folder+'" data-tooltip="tooltip" data-toggle="modal" title="FE_CREATE_DIRECTORY" data-placement="bottom" class="btn btn-default btn-sm "><span aria-hidden="true" class="glyphicon glyphicon-plus"></span><span aria-hidden="true" class="glyphicon glyphicon-folder-open"></span></button><button id="select_delete_popup" data-tooltip="tooltip" title="FE_DELETE_SELECTED" data-placement="bottom" class="btn btn-default btn-sm disabled"><span aria-hidden="true" class="glyphicon glyphicon-duplicate"></span><span aria-hidden="true" class="glyphicon glyphicon-remove"></span></button><button id="select_insert" data-tooltip="tooltip" title="FE_INSERT_SELECTED" data-placement="bottom" class="btn btn-default btn-sm disabled"><span aria-hidden="true" class="glyphicon glyphicon-file"></span><span aria-hidden="true" class="glyphicon glyphicon-ok"></span></button></div><div class="col-xs-5 col-sm-3 col-md-2"><span>FE_VIEWS</span><button id="view_thumbs" data-tooltip="tooltip" title="FE_VIEW_MINIATURE" data-placement="bottom" class="btn btn-default btn-sm active"><span aria-hidden="true" class="glyphicon glyphicon-th"></span></button><button id="view_details" data-tooltip="tooltip" title="FE_VIEW_DETAILS" data-placement="bottom" class="btn btn-default btn-sm"><span aria-hidden="true" class="glyphicon glyphicon-align-justify"></span></button></div><div class="col-xs-12 col-sm-4 col-md-3 col_top_right"><div class="btn-group" role="group" aria-label="First group"><div class="btn-group grupo1" role="group" aria-label=""><div class="input-group search_content"><input id="search" name="search" type="text" class="form-control input-sm" placeholder="FE_SEARCH_NAME_FILES" autocomplete="off" ><span class="input-group-btn"><button class="btn btn-default input-sm" type="button" id="search_" data-tooltip="tooltip" data-placement="bottom" title="FE_SEARCH_NAME_FILES"><span aria-hidden="true" class="glyphicon glyphicon-search"></span></button></span></div></div><div class="btn-group grupo2" role="group" aria-label=""><button class="btn btn-default input-sm" type="button" id="search_clear" data-tooltip="tooltip" data-placement="bottom" title="FE_CLEAR"><span aria-hidden="true" class="glyphicon glyphicon-remove-sign"></span></button></div></div></div></div>',p+='<div class="row"><div class="col-md-12"><ol id="ruta" class="breadcrumb"><li><a rel="/" href="#"><span aria-hidden="true" class="glyphicon glyphicon-home"></span></a></li></ol></div></div>',p+="</div></div></div>",p+='<div class="container-fluid">',p+='<input type="hidden" id="path" name="path" value=""><div class="hidden"><div id="preview_file"><span aria-hidden="true" class="glyphicon glyphicon-file txt"></span></div></div>',p+='<div id="content_list" class="row"><div class="col-md-12" id="row_header_content"><div class="row_header"><div class="col name">FE_NOMBRE</div><div class="col type">FE_TIPO</div><div class="col size">FE_TAMANO</div><div class="col date">FE_DATE</div><div class="col actions">FE_ACTIONS</div></div></div><div class="col-md-12 list"><ul id="list" class="scroll"></ul></div></div>',p+='<div id="context-menu"><ul class="dropdown-menu menu_contextual" role="menu"><li class="view"><a href="#">FE_VIEW</a></li><li class="rename"><a href="#">FE_RENAME</a></li><li class="download"><a href="#">FE_DOWNLOAD</a></li><li class="delete"><a href="#">FE_DELETE</a></li></ul></div>',p+="</div>",o.append(p);var q=o.find("#list");o.validExtension=function(a){var b=!1,c="",d=a.lastIndexOf(".");d>0&&(c=a.substr(d+1));for(var e=0;e<j.ext.length;e++)if(j.ext[e]===c){b=!0;break}return b},o.parseMsg=function(b){if("object"==typeof b){var e=b.query,f=b.params;a.each(n,function(a,b){e=d(a,b,e)});var g=e.indexOf("%s"),h=0,i=!1;do{if(i=!1,-1!==(g=e.indexOf("%s"))&&f.length>h){var j=f[h].toString();""!==j&&(e=c(e,j,g,2),h++,i=!0)}}while(i);return e=d("%s","",e)}},o.formatBytes=function(a){return a<1024?a+" Bytes":a<1048576?(a/1024).toFixed(3)+" KB":a<1073741824?(a/1048576).toFixed(3)+" MB":(a/1073741824).toFixed(3)+" GB"},o.loadFiles=function(b,c){var d=q;d.html("");var e=a("#context-menu",o).clone().html(),g='<li><div class="item context" ><div class="check"><label><input type="checkbox" name="check"></label></div><a class="image" href="#"><img src=""></a><div class="col name"><h3><span class="texto"></span></h3></div><div class="col type"></div><div class="col size"></div><div class="col date"></div><div class="col actions"><div class="btn-group menu_options" data-tooltip="tooltip" data-placement="left" title="Acciones"><button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><span aria-hidden="true" class="glyphicon glyphicon-tasks" ></button>'+e+"</div></div></div></li>",h=null;if("/"!=c){var i=c.replace(/\//gi," ").trim().split(" ");1==i.length?i="/":(i=i.slice(0,i.length-1).join("/"),i="/"+i+"/"),h=a(g),h.find(".image").html('<div class="content_icon"><span aria-hidden="true" class="glyphicon glyphicon-level-up"></span></div>'),h.find(".image").addClass("dir").attr("rel",i),h.find(".texto").text(f("FE_BACK")),h.find(".type").text(""),h.find(".size").text(""),h.find(".actions").html(""),h.addClass("parentup back"),h.find(".item").removeClass("context"),h.find(".check").remove(),d.append(h)}a.each(b,function(b,c){if(1==c.isdir||0==c.isdir&&o.validExtension(c.filename)){h=a(g);var e=c.filename,i=e,k=c.filetype,l=o.formatBytes(c.size),m=moment.unix(c.lastmodified).format(j.datetimeFormat);1==c.isdir?(h.find(".image").html('<div class="content_icon"><span aria-hidden="true" class="glyphicon glyphicon-folder-close"></span></div>'),h.find(".image").addClass("dir").attr("rel",c.urlfolder),h.find(".name").attr("data-name-original",e).attr("data-name",e),h.find(".texto").text(i),h.find(".type").text("dir"),h.find(".size").text(""),h.find(".date").text(m)):"jpg"===c.filetype||"png"===c.filetype||"jpeg"==c.filetype||"gif"==c.filetype?(h.find(".image img").attr("src",c.preview),h.find(".image").addClass("fancybox").attr("data-url",c.previewfull).attr("titleShow",!0).attr("rel",c.previewfull).attr("title",f("FF_PATH")+c.previewfull+"|"+f("FE_SIZE")+" "+o.formatBytes(c.size)+" | "+f("FE_LAST_MODIFIED")+moment.unix(c.lastmodified).format(j.datetimeFormat)),h.find(".name").attr("data-name-original",e).attr("data-name",e),h.find(".texto").text(i),h.find(".type").text(k),h.find(".date").text(m)):(h.find(".image").html('<div class="content_icon"><span aria-hidden="true" class="glyphicon glyphicon-file '+c.filetype+'" ></span></div>'),h.find(".image").addClass("fancybox").attr("data-url",c.previewfull).attr("rel","#preview_file").attr("title",f("FE_FILENAME")+c.filename+" | "+f("FE_SIZE")+o.formatBytes(c.size)+" | "+f("FE_LAST_MODIFIED")+moment.unix(c.lastmodified).format(j.datetimeFormat)),h.find(".name").attr("data-name-original",e).attr("data-name",e),h.find(".texto").text(i),h.find(".type").text(k),h.find(".size").text(l),h.find(".date").text(m)),d.append(h)}})},o.preview=function(b){a.fancybox({href:b.find("a").attr("rel"),title:b.find("a").attr("title")},{openEffect:"elastic",closeEffect:"elastic",minWidth:300,minHeight:200,beforeShow:function(){var a=this.title.split("|"),b="";if(a.length>0)for(var c=0;c<a.length;c++){var d="",e=[];d=a[c],e=d.split("::"),1==e.length?b=b+"<p><strong>"+e[0]+"</strong>:</p>":2==e.length&&(b=b+"<p><strong>"+e[0]+"</strong>:"+e[1]+"</p>")}this.title="<h3>"+f("FE_INFORMATION")+"</h3><div>"+b+"</div"},helpers:{title:{type:"inside"}}})},o.viewRename=function(b){a("#"+o.config.rename_popup,o).modal("show"),a("#"+o.config.rename_popup,o).find("#nameold").val(b.find(".name").data("name-original")),a("#"+o.config.rename_popup,o).find("#name").val(e(b.find(".name").data("name-original")))},o.download=function(b){var c=b.find(".name").data("name-original"),d=a("#path",o).val(),e=j.url+"?action=download&path="+d+"&name="+c;null!==j.token&&(e=e+"&"+j.tokenName+"="+j.token),window.document.location.href=e},o.viewDelete=function(b){var c=b.find(".name").data("name-original"),d=a("#"+o.config.delete_popup,o);d.find(".modal-body .content").html('<p class="filename_delete">'+c+'</p><input type="hidden" name="name" value="'+c+'" />'),d.find(".modal-body .result").html(""),a("#"+o.config.delete_popup,o).modal("show")},o.insert=function(){var b=q.find(".item.active");if(b.length>0){var c=[];return a.each(b,function(b,d){var e={};e.url=a(d).find(".image").attr("data-url"),e.thumbs=a(d).find(".image img").attr("src"),e.filename=a(d).find(".name").attr("data-name-original"),e.filetype=a(d).find(".type").text(),e.filesize=a(d).find(".size").text(),e.lastmodified=a(d).find(".date").text(),c.push(e)}),c}return!1},o.getFolder=function(b){b||(b="/");var c={action:"getfolder",path:b};null!==j.token&&(c[j.tokenName]=j.token),null!==j.typeFile&&(c.typeFile=j.typeFile),a.ajax({type:"POST",url:j.url,data:c,beforeSend:function(a){q.html('<div id="loading"></div>')},success:function(c){if(c=c,1==c.status){o.loadFiles(c.data,b),a(".context",o).contextmenu({target:"#"+o.attr("id")+" #context-menu",before:function(a,b){return this.getMenu().find("li").css("display","block"),b.find(".image.dir").length>0&&(this.getMenu().find("li.view").css("display","none"),this.getMenu().find("li.download").css("display","none")),!0},onItem:function(b,c){a(c.target).parent().is(".view")&&o.preview(b),a(c.target).parent().is(".rename")&&o.viewRename(b),a(c.target).parent().is(".download")&&o.download(b),a(c.target).parent().is(".delete")&&o.viewDelete(b)}}),a(".menu_options",o).on("show.bs.dropdown",function(b){var c=a(this).parents(".item");a(this).find("li").css("display","block"),c.find(".image.dir").length>0&&(a(this).find("li.view").css("display","none"),a(this).find("li.download").css("display","none"))}).bind("contextmenu",function(a){return!1}),a(".menu_options",o).on("click","li > a",function(b){b.preventDefault(),a(this).parent().is(".view")&&o.preview(a(this).parents(".item")),a(this).parent().is(".rename")&&o.viewRename(a(this).parents(".item")),a(this).parent().is(".download")&&o.download(a(this).parents(".item")),a(this).parent().is(".delete")&&o.viewDelete(a(this).parents(".item"))}),a("#view_thumbs",o).is(".active")?a(".item .col.name",o).each(function(b,c){var d=a(c).attr("data-name"),e=a(c).find(".texto").text();a(c).attr("data-name",d).find(".texto").text(e)}):a("#view_details",o).is(".active")&&a(".item .col.name",o).each(function(b,c){var d=a(c).attr("data-name"),e=a(c).find(".texto").text();a(c).attr("data-name",e).find(".texto").text(d)}),a("#path",o).val(b);for(var d=b.split("/"),e=[],f=d.length,h=0;h<f;h++)""!==d[h]&&e.push(d[h]);var i=a("#ruta",o);i.html('<li><a href="#" rel="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></li>');var j="/";a.each(e,function(b,c){var d=null;b<e.length-1?(j=j+c+"/",d=a('<li><a href="#" rel="'+j+'">'+c+"</a></li>"),i.append(d)):(d=a("<li>"+c+"</li>"),i.append(d))}),g()}},error:function(a,b,c){0===a.status?q.html('<div class="alert alert-info text-center">Not connect: Verify Network.</div>'):404==a.status?q.html('<div class="alert alert-info text-center">Requested page not found [404]</div>'):500==a.status?q.html('<div class="alert alert-info text-center">Internal Server Error [500].</div>'):"parsererror"===b?q.html('<div class="alert alert-info text-center">Requested JSON parse failed.</div>'):"timeout"===b?q.html('<div class="alert alert-info text-center">Time out error.</div>'):"abort"===b?q.html('<div class="alert alert-info text-center">Ajax request aborted.</div>'):alert("Uncaught Error: "+a.responseText)}})},o.init=function(){a(o).append(j.getModalTemplate({modal_id:o.config.new_folder,header:{title:f("FE_CREATE_DIRECTORY")},body:'<div class="form-group"><label for="exampleInputEmail1">'+f("FE_NAME")+'</label><input type="text" class="form-control" id="name" name="name" placeholder="'+f("FE_ENTER_NAME")+'"></div><div id="newfolder_popup_result"></div>',footer:{ok:f("FE_SAVE"),close:f("FE_CANCEL")}})),a(o).append(j.getModalTemplate({type:"lg",modal_id:o.config.upload_popup,header:{title:f("FE_UPLOAD")},body:'<div id="actions" class="row"><input type="hidden" id="reloadfiles" name="reloadfiles" value="0"><div class="col-lg-7"><span class="btn btn-success fileinput-button dz-clickable"><i class="glyphicon glyphicon-plus"></i><span>'+f("FE_ADD_FILES")+'</span></span><button type="submit" class="btn btn-primary start"><i class="glyphicon glyphicon-upload"></i><span>'+f("FE_START_UPLOAD")+'</span></button><button type="reset" class="btn btn-warning cancel"><i class="glyphicon glyphicon-ban-circle"></i><span>'+f("FE_CANCEL_UPLOAD")+'</span></button></div><div class="col-lg-5"><span class="fileupload-process"><div id="total-progress" class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" style="opacity: 0;"><div class="progress-bar progress-bar-success" style="width: 100%;" data-dz-uploadprogress=""></div></div></span></div></div><div class="row"><div class="col-lg-12"><div class="col-lg-12"><div id="error-all"></div></div></div></div><div class="table table-striped" class="files" id="previews"><div class="row"><div class="col-lg-12"><div class="col-lg-12"><small id="upload_max" class="text-info">FE_MAX_FILES_UPLOAD</small></div></div></div></div>',footer:!1})),a(o).append(j.getModalTemplate({modal_id:o.config.delete_popup,header:{title:f("FE_DELETE")},body:'<div class="content"><div class="form-group"><label for="exampleInputEmail1">'+f("FE_NAME")+'</label><input type="hidden" name="nameold" id="nameold"><input type="text" class="form-control" id="name" name="name" placeholder="'+f("FE_ENTER_NAME")+'"></div></div><div class="result"></div>',footer:{ok:f("FE_DELETE"),close:f("FE_CLOSE")}})),a(o).append(j.getModalTemplate({modal_id:o.config.rename_popup,header:{title:f("FE_RENAME")},body:'<div class="content"><div class="form-group"><label for="exampleInputEmail1">'+f("FE_NAME")+'</label><input type="hidden" name="nameold" id="nameold"><input type="text" class="form-control" id="name" name="name" placeholder="'+f("FE_ENTER_NAME")+'"></div></div><div class="result"></div>',footer:{ok:f("FE_RENAME"),close:f("FE_CLOSE")}}));var b='<div class="file-row"><div><span class="preview"><img data-dz-thumbnail /></span></div><div><p class="name" data-dz-name></p><strong class="error text-info" data-dz-errormessage></strong></div><div><p class="size" data-dz-size></p><div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="progress-bar progress-bar-success" style="width:0%;" data-dz-uploadprogress></div></div></div><div><button data-dz-remove class="btn btn-warning cancel"><i class="glyphicon glyphicon-ban-circle"></i><span>'+f("FE_CANCEL")+'</span></button><button data-dz-remove class="btn btn-danger delete"><i class="glyphicon glyphicon-trash"></i><span>'+f("FE_DELETE")+"</span></button></div></div>";Dropzone.autoDiscover=!1;var c=new Dropzone("#"+o.attr("id"),{url:j.url,thumbnailWidth:80,thumbnailHeight:80,previewTemplate:b,autoQueue:!1,previewsContainer:"#"+o.attr("id")+" #previews",clickable:"#"+o.attr("id")+" .fileinput-button",maxFiles:j.upload_max,parallelUploads:j.upload_max,uploadMultiple:!0,acceptedFiles:j.ext.join(",."),dictInvalidFileType:f("BE_GETFILEALL_NOT_PERMITIDO")});c.on("addedfile",function(b){a("#error-all",o).html("")}),c.on("maxfilesexceeded",function(a){this.removeFile(a)}),c.on("totaluploadprogress",function(b){a("#total-progress .progress-bar",o).width(b+"%")}),c.on("sending",function(b){a("#total-progress",o).css("opacity",1)}),c.on("queuecomplete",function(b){a("#total-progress",o).css("opacity",0)}),c.on("processing",function(a){}),c.on("processingmultiple",function(b){var c={action:"uploadfile",path:a("#path",o).val()};null!==j.token&&(c[j.tokenName]=j.token),null!==j.typeFile&&(c.typeFile=j.typeFile),this.options.params=c}),c.on("success",function(b,c,d){1==c.status&&a("#reloadfiles",o).val(1)}),c.on("successmultiple",function(b,c,d){var e=c,f=o.parseMsg(e.msg);0==e.status?a("#error-all",o).html('<div class="alert alert-info">'+f+"</div>"):a("#error-all",o).html('<div class="alert alert-success">'+f+"</div>")}),a("#actions .start",o).on("click",function(a){a.preventDefault(),c.enqueueFiles(c.getFilesWithStatus(Dropzone.ADDED))}),a("#actions .cancel",o).on("click",function(b){b.preventDefault(),c.removeAllFiles(!0),a("#error-all",o).html("")}),_html=a(".panel-heading, button, span, label, h4, h3, #row_header_content .col, #context-menu a",o),_html.text(function(a,b){return f(b)}),_html=a("input[type='text'], button",o),_html.attr({placeholder:function(a,b){return f(b)},title:function(a,b){return f(b)}}),a("#upload_max",o).text(function(a,b){return f(b)+j.upload_max}),j.token&&a(o).append('<input type="hidden" id="token" name="'+j.tokenName+'" value="'+j.token+'" />'),a("#search",o).on("keyup click",function(){g()}),a("#search_clear",o).on("click",function(b){a("#search",o).val(""),g()}),"thumbs"==j.views?(a("#view_thumbs",o).addClass("active"),a("#view_details",o).removeClass("active"),a("#content_list",o).removeClass("view_detalles")):"details"==j.views&&(a("#view_thumbs",o).removeClass("active"),a("#view_details",o).addClass("active"),a("#content_list",o).addClass("view_detalles")),a("#view_thumbs",o).on("click",function(b){a("#view_thumbs",o).addClass("active"),a("#view_details",o).removeClass("active"),a("#content_list",o).removeClass("view_detalles"),a(".item .col.name",o).each(function(b,c){var d=a(c).attr("data-name"),e=a(c).find(".texto").text();a(c).attr("data-name",e).find(".texto").text(d)})}),a("#view_details",o).on("click",function(b){a("#view_thumbs",o).removeClass("active"),a("#view_details",o).addClass("active"),a("#content_list",o).addClass("view_detalles"),a(".item .col.name",o).each(function(b,c){var d=a(c).attr("data-name"),e=a(c).find(".texto").text();a(c).attr("data-name",e).find(".texto").text(d)})}),a("#ruta",o).on("click","a",function(b){b.preventDefault(),o.getFolder(a(this).attr("rel"))});a('[data-tooltip="tooltip"]',o).tooltip();a("#"+o.config.rename_popup,o).on("show.bs.modal",function(b){a("#"+o.config.rename_popup+" #name",o).val(""),a("#"+o.config.rename_popup+" .result",o).html("");var c=a(b.relatedTarget),d=c.data("name"),e=a(this);e.find('.modal-body .content input[name="name"]').val(d),e.find('.modal-body .content input[name="nameold"]').val(d),e.find(".modal-body .result").html("")}),a("#"+o.config.rename_popup+" form",o).validate({rules:{name:{required:!0,minlength:1}},submitHandler:function(b){var c=a("#path",o).val(),d={action:"renamefile",path:c};null!==j.token&&(d[j.tokenName]=j.token),null!==j.typeFile&&(d.typeFile=j.typeFile),d=a.param(d)+"&"+a(b).serialize(),a.ajax({type:"POST",url:j.url,data:d,beforeSend:function(b){a("#"+o.config.rename_popup+" form .result",o).html('<div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div></div>')},success:function(b){var d=o.parseMsg(b.msg);1==b.status?(o.getFolder(c),a("#"+o.config.rename_popup+" form .result",o).html('<div class="alert alert-success">'+d+"</div>"),a("#"+o.config.rename_popup+" form input[name='nameold']",o).val(b.data.namefile),a("#"+o.config.rename_popup+" form input[name='name']",o).val(e(b.data.namefile))):a("#"+o.config.rename_popup+" form .result",o).html('<div class="alert alert-info">'+d+"</div>")}})}}),a("#select_delete_popup",o).on("click",function(b){a("#"+o.config.delete_popup+" form .result",o).html("");var c=q.find(".item.active");if(!(c.length>0))return!1;var d=a("#"+o.config.delete_popup,o),e="";a.each(c,function(b,c){e=e+'<p class="filename_delete">'+a(c).find(".name").data("name-original")+'</p><input type="hidden" name="name[]" value="'+a(c).find(".name").data("name-original")+'" />'}),d.find(".modal-body .content").html(e),a("#"+o.config.delete_popup,o).modal("show")}),a("#"+o.config.delete_popup+" form",o).validate({submitHandler:function(b){var c=a("#path",o).val(),d={action:"deletefile",path:c};null!==j.token&&(d[j.tokenName]=j.token),null!==j.typeFile&&(d.typeFile=j.typeFile),d=a.param(d)+"&"+a(b).serialize(),a.ajax({type:"POST",url:j.url,data:d,beforeSend:function(b){a("#"+o.config.delete_popup+" form .result",o).html('<div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div></div>')},success:function(b){var d=o.parseMsg(b.msg);if(1==b.status){a("#"+o.config.delete_popup+" form .result",o).html("");var e=b.data;e.length>0?a.each(e,function(b,c){a("#"+o.config.delete_popup+" form .content p",o).each(function(b,d){if(a(d).clone().children().remove().end().text().trim()==c.namefile)return a(d).find("span").remove(),1==c.status?a(d).append(' <span class="text-success"><span aria-hidden="true" class="glyphicon glyphicon-ok"></span>'+o.parseMsg(c)+"</span>"):0==c.status&&a(d).append(' <span class="text-info"><span aria-hidden="true" class="glyphicon glyphicon-alert"></span>'+o.parseMsg(c)+"</span>"),!1})}):a("#"+o.config.delete_popup+" form .result",o).html('<div class="alert alert-success">'+d+"</div>"),o.getFolder(c)}else a("#"+o.config.delete_popup+" form .result",o).html('<div class="alert alert-info">'+d+"</div>")}})}}),a("#"+o.config.new_folder,o).on("show.bs.modal",function(b){a("#name",o).val(""),a("#newfolder_popup_result",o).html("")}),a("#"+o.config.upload_popup,o).on("hide.bs.modal",function(b){a("#error-all",o).html(""),c.removeAllFiles(!0),1==a("#reloadfiles",o).val()&&(a("#reloadfiles",o).val(0),o.getFolder(a("#path",o).val()))}),a("#"+o.config.new_folder+" form",o).validate({rules:{name:{required:!0,minlength:1}},submitHandler:function(b){var c=a("#path",o).val(),d={action:"newfolder",path:c};null!==j.token&&(d[j.tokenName]=j.token),null!==j.typeFile&&(d.typeFile=j.typeFile),d=a.param(d)+"&"+a(b).serialize(),a.ajax({type:"POST",url:j.url,data:d,beforeSend:function(b){a("#newfolder_popup_result",o).html('<div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div></div>')},success:function(b){var d=o.parseMsg(b.msg);1==b.status?(o.getFolder(c),a("#newfolder_popup_result",o).html('<div class="alert alert-success">'+d+"</div>")):a("#newfolder_popup_result",o).html('<div class="alert alert-info">'+d+"</div>")}})}}),!1===j.insertButton&&a("#select_insert",o).remove(),a("#select_insert",o).on("click",function(a){console.log("click");var b=o.insert();if(window.parent.tinymce&&window.parent.tinymce.activeEditor.windowManager){var c=k("field_name");window.parent.document.getElementById(c).value=b[0].url,window.parent.tinymce.activeEditor.windowManager.close()}window.opener&&(window.opener.setData(b),window.close())}),q.on("click",".item .image, .item .col:not(.actions)",function(b){b.preventDefault(),a(this).parents(".item").find("a.image").is(".dir")?o.getFolder(a(this).parents(".item").find("a.image").attr("rel")):o.preview(a(this).parents(".item"))}),q.on("click",".check input",function(b){a(this).is(":checked")?a(this).parents(".item").addClass("active"):a(this).parents(".item").removeClass("active"),q.find(".item.active").length>0?(a("#select_delete_popup",o).removeClass("disabled"),0===q.find(".item.active").find("a.dir").length&&a("#select_insert",o).removeClass("disabled")):(a("#select_delete_popup",o).addClass("disabled"),a("#select_insert",o).addClass("disabled"))}),o.getFolder()},o.init()}}(jQuery);