function joinClasses(val) {return Array.isArray(val) ? val.map(joinClasses).filter(nulls).join(' ') : val;};function nulls(val) {return val != null && val !== '';};var jade = {};
jade.attrs=function attrs(obj, terse){
  var buf = [];

  var keys = Object.keys(obj);

  if (keys.length) {
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('class' == key) {
        if (val = joinClasses(val)) {
          buf.push(' ' + key + '="' + val + '"');
        }
      } else {
        buf.push(exports.attr(key, val, false, terse));
      }
    }
  }

  return buf.join('');
};
jade.escape=exports.escape=function jade_escape(html){
  var result = String(html).replace(jade_match_html, jade_encode_char);
  if (result === '' + html) return html;
  else return result;
};
module.exports.dialog_callback = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data) {
var jade_indent = [];
buf.push("<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\">\n    <script>\n      var data = {id:\"" + (jade.escape((jade_interp = data.id) == null ? '' : jade_interp)) + "\",label:\"" + (jade.escape((jade_interp = data.label) == null ? '' : jade_interp)) + "\"};\n      window.opener.postMessage(data,window.location.protocol + '//' + window.location.hostname);\n      setTimeout(function(){\n          window.close();\n      },500);\n      \n    </script>\n  </head>\n  <body></body>\n</html>");}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return buf.join("");
}; 

module.exports.document = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (Boolean, JSON, Object, actions, adminTitle, allow_delete, dialog, errors, form, global_head, global_script, isDialog, model_label, model_name, pageTitle, renderedHead, rootPath, subCollections, undefined, userPanel, version) {
var jade_indent = [];
buf.push("<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <title>" + (null == (jade_interp = pageTitle) ? "" : jade_interp) + "</title>\n    <link rel=\"stylesheet\"" + (jade.attr("href", '' + (rootPath) + '/lightness/jquery-ui.css', true, true)) + ">\n    <link rel=\"stylesheet\"" + (jade.attr("href", '' + (rootPath) + '/vendor/bootstrap/docs/assets/css/bootstrap.css', true, true)) + ">\n    <link rel=\"stylesheet\"" + (jade.attr("href", '' + (rootPath) + '/css/main.css', true, true)) + ">\n    <script" + (jade.attr("src", '' + (rootPath) + '/vendor/jquery/jquery.js', true, true)) + "></script>\n    <script" + (jade.attr("src", '' + (rootPath) + '/lightness/jquery-ui.js', true, true)) + "></script>\n    <script" + (jade.attr("src", '' + (rootPath) + '/vendor/bootstrap/docs/assets/js/bootstrap.js', true, true)) + "></script>\n    <script" + (jade.attr("src", '' + (rootPath) + '/js/clienstrum.js', true, true)) + "></script>\n    <script>var root = '" + (jade.escape((jade_interp = rootPath) == null ? '' : jade_interp)) + "';</script>" + (null == (jade_interp = renderedHead) ? "" : jade_interp) + "" + (((jade_interp = global_head) == null ? '' : jade_interp)) + "\n    <script" + (jade.attr("src", '' + (rootPath) + '/js/maps.js', true, true)) + "></script>\n  </head>\n  <body>");
if (!dialog)
{
buf.push("\n    <header class=\"navbar navbar-static-top\">\n      <div class=\"navbar-inner\">\n        <div class=\"container\">\n          <div class=\"btn-group pull-right\"><a" + (jade.attr("href", '' + (rootPath) + '/', true, true)) + " class=\"btn btn-inverse\"><i class=\"icon-home icon-white\"></i>&nbsp;Admin</a><a href=\"/\" class=\"btn\"><i class=\"icon-share\"></i>&nbsp;Site</a><a" + (jade.attr("href", '' + (rootPath) + '/logout', true, true)) + " class=\"btn\">\n              <div class=\"icon-lock\"></div>&nbsp;Logout</a></div>\n          <h1><a" + (jade.attr("href", '' + (rootPath) + '/', true, true)) + ">" + (jade.escape((jade_interp = adminTitle) == null ? '' : jade_interp)) + "</a><span class=\"divider\">/</span><a" + (jade.attr("href", "" + (rootPath) + "/model/" + (model_name) + "", true, true)) + ">" + (jade.escape((jade_interp = model_label) == null ? '' : jade_interp)) + "</a><span class=\"divider\">/</span>editor</h1>\n        </div>\n      </div>\n    </header>");
}
buf.push("\n    <div class=\"container-fluid formage\">\n      <div id=\"content\">");
if (!isDialog)
{
buf.push("\n        <div class=\"page-header\">\n          <h2>" + (jade.escape((jade_interp = model_label) == null ? '' : jade_interp)) + " editor</h2>\n        </div>");
}
if (Object.keys(errors).length)
{
buf.push("\n        <p class=\"alert alert-error\">Saving failed, fix the following errors and try again.</p>");
}
if (errors.exception)
{
buf.push("\n        <p class=\"alert alert-error\">" + (jade.escape((jade_interp = errors.exception) == null ? '' : jade_interp)) + "</p>");
}
buf.push("\n        <form id=\"document\" enctype=\"multipart/form-data\" method=\"post\" class=\"clearfix\">" + (null == (jade_interp = form) ? "" : jade_interp));
if(subCollections && subCollections.length)
{
// iterate subCollections
;(function(){
  var $$obj = subCollections;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var sub = $$obj[$index];

buf.push("<a" + (jade.attr("href", "" + (rootPath) + "/model/" + (sub.model) + "?" + (sub.field) + "=" + (sub.value) + "", true, true)) + " class=\"subCollection\">" + (jade.escape((jade_interp = sub.label) == null ? '' : jade_interp)) + " - " + (jade.escape((jade_interp = sub.count? sub.count + ' Items' : 'No items') == null ? '' : jade_interp)) + "</a>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var sub = $$obj[$index];

buf.push("<a" + (jade.attr("href", "" + (rootPath) + "/model/" + (sub.model) + "?" + (sub.field) + "=" + (sub.value) + "", true, true)) + " class=\"subCollection\">" + (jade.escape((jade_interp = sub.label) == null ? '' : jade_interp)) + " - " + (jade.escape((jade_interp = sub.count? sub.count + ' Items' : 'No items') == null ? '' : jade_interp)) + "</a>");
    }

  }
}).call(this);

}
buf.push("\n          <p class=\"submit btn-group\">\n            <button id=\"saveButton\" type=\"submit\" data-saving-text=\"Saving...\" class=\"btn btn-large btn-primary\">Save</button><a id=\"cancelButton\"" + (jade.attr("href", "" + (rootPath) + "/model/" + (model_name) + "", true, true)) + " class=\"btn btn-large\">Cancel</a>");
if (allow_delete)
{
buf.push("\n            <button id=\"deleteButton\" type=\"button\" data-loading-text=\"Deleting...\" class=\"btn btn-large btn-danger\">Delete</button>");
}
// iterate actions
;(function(){
  var $$obj = actions;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var action = $$obj[$index];

if (action.id != 'delete')
{
buf.push("\n            <button" + (jade.attr("value", '' + (action.id) + '', true, true)) + " class=\"action btn btn-large\">" + (jade.escape((jade_interp = action.label) == null ? '' : jade_interp)) + "</button>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var action = $$obj[$index];

if (action.id != 'delete')
{
buf.push("\n            <button" + (jade.attr("value", '' + (action.id) + '', true, true)) + " class=\"action btn btn-large\">" + (jade.escape((jade_interp = action.label) == null ? '' : jade_interp)) + "</button>");
}
    }

  }
}).call(this);

buf.push("\n          </p>\n        </form>");
if (!isDialog)
{
buf.push("\n        <div id=\"myModal\" tabindex=\"-1\" role=\"dialog\" style=\"width:1060px;height:624px\" class=\"modal hide fade\">\n          <div class=\"modal-header\">\n            <button type=\"button\" data-dismiss=\"modal\" class=\"close\">×</button>\n            <h3 id=\"myModalLabel\">&nbsp;</h3>\n          </div>\n          <div style=\"max-height:inherit\" class=\"modal-body\">\n            <iframe src=\"\" style=\"zoom: 0.60;\" width=\"99.6%\" height=\"800\" frameborder=\"0\"></iframe>\n          </div>\n        </div>");
}
buf.push("\n      </div>");
if (!dialog)
{
buf.push("\n      <footer class=\"footer\">");
if (userPanel)
{
buf.push("\n        <p class=\"user-panel\">" + (((jade_interp = userPanel) == null ? '' : jade_interp)) + "</p>");
}
buf.push("\n        <p><a href=\"http://github.com/Empeeric/formage\">Formage</a>&nbsp;" + (jade.escape((jade_interp = version) == null ? '' : jade_interp)) + ", from&nbsp;<a href=\"http://empeeric.com\">Empeeric</a></p><a href=\"http://github.com/Empeeric/formage\"><img" + (jade.attr("src", '' + (rootPath) + '/images/logo-40.png', true, true)) + "></a>\n      </footer>");
}
buf.push("\n      <div id=\"old-version\" hidden class=\"alert alert-error\">\n        <button type=\"button\" data-dismiss=\"alert\" class=\"close\">&times;</button><strong>Warning;</strong>There is a newer version of formage.\n      </div>\n    </div>\n    <script>\n      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n      \n      ga('create', 'UA-15378843-16', 'auto');\n      ga('send', 'pageview');\n      \n    </script>\n    <script>\n      var model = '" + (jade.escape((jade_interp = model_name) == null ? '' : jade_interp)) + "';\n      var isDialog = " + (((jade_interp = JSON.stringify(Boolean(isDialog))) == null ? '' : jade_interp)) + ";\n    </script>" + (((jade_interp = global_script) == null ? '' : jade_interp)) + "\n  </body>\n</html>");}.call(this,"Boolean" in locals_for_with?locals_for_with.Boolean:typeof Boolean!=="undefined"?Boolean:undefined,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"Object" in locals_for_with?locals_for_with.Object:typeof Object!=="undefined"?Object:undefined,"actions" in locals_for_with?locals_for_with.actions:typeof actions!=="undefined"?actions:undefined,"adminTitle" in locals_for_with?locals_for_with.adminTitle:typeof adminTitle!=="undefined"?adminTitle:undefined,"allow_delete" in locals_for_with?locals_for_with.allow_delete:typeof allow_delete!=="undefined"?allow_delete:undefined,"dialog" in locals_for_with?locals_for_with.dialog:typeof dialog!=="undefined"?dialog:undefined,"errors" in locals_for_with?locals_for_with.errors:typeof errors!=="undefined"?errors:undefined,"form" in locals_for_with?locals_for_with.form:typeof form!=="undefined"?form:undefined,"global_head" in locals_for_with?locals_for_with.global_head:typeof global_head!=="undefined"?global_head:undefined,"global_script" in locals_for_with?locals_for_with.global_script:typeof global_script!=="undefined"?global_script:undefined,"isDialog" in locals_for_with?locals_for_with.isDialog:typeof isDialog!=="undefined"?isDialog:undefined,"model_label" in locals_for_with?locals_for_with.model_label:typeof model_label!=="undefined"?model_label:undefined,"model_name" in locals_for_with?locals_for_with.model_name:typeof model_name!=="undefined"?model_name:undefined,"pageTitle" in locals_for_with?locals_for_with.pageTitle:typeof pageTitle!=="undefined"?pageTitle:undefined,"renderedHead" in locals_for_with?locals_for_with.renderedHead:typeof renderedHead!=="undefined"?renderedHead:undefined,"rootPath" in locals_for_with?locals_for_with.rootPath:typeof rootPath!=="undefined"?rootPath:undefined,"subCollections" in locals_for_with?locals_for_with.subCollections:typeof subCollections!=="undefined"?subCollections:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"userPanel" in locals_for_with?locals_for_with.userPanel:typeof userPanel!=="undefined"?userPanel:undefined,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));;return buf.join("");
}; 

module.exports.inline = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (Object, errors, form) {
var jade_indent = [];
buf.push("\n<style type=\"text/css\">\n  div {\n      display: inline-block;\n  }\n  \n  .hide {\n      display: none;\n  }\n  \n</style>");
if (Object.keys(errors).length)
{
buf.push("\n<p class=\"alert alert-error\">Saving failed, fix the following errors and try again.</p>");
}
if (errors.exception)
{
buf.push("\n<p class=\"alert alert-error\">" + (jade.escape((jade_interp = errors.exception) == null ? '' : jade_interp)) + "</p>");
}
buf.push("\n<form id=\"document\" enctype=\"multipart/form-data\" method=\"post\" class=\"clearfix\">" + (null == (jade_interp = form) ? "" : jade_interp) + "\n</form>");}.call(this,"Object" in locals_for_with?locals_for_with.Object:typeof Object!=="undefined"?Object:undefined,"errors" in locals_for_with?locals_for_with.errors:typeof errors!=="undefined"?errors:undefined,"form" in locals_for_with?locals_for_with.form:typeof form!=="undefined"?form:undefined));;return buf.join("");
}; 

module.exports.layout = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (adminTitle, dialog, global_head, global_script, pageTitle, renderedHead, rootPath, userPanel, version) {
var jade_indent = [];
buf.push("<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <title>" + (null == (jade_interp = pageTitle) ? "" : jade_interp) + "</title>\n    <link rel=\"stylesheet\"" + (jade.attr("href", '' + (rootPath) + '/lightness/jquery-ui.css', true, true)) + ">\n    <link rel=\"stylesheet\"" + (jade.attr("href", '' + (rootPath) + '/vendor/bootstrap/docs/assets/css/bootstrap.css', true, true)) + ">\n    <link rel=\"stylesheet\"" + (jade.attr("href", '' + (rootPath) + '/css/main.css', true, true)) + ">\n    <script" + (jade.attr("src", '' + (rootPath) + '/vendor/jquery/jquery.js', true, true)) + "></script>\n    <script" + (jade.attr("src", '' + (rootPath) + '/lightness/jquery-ui.js', true, true)) + "></script>\n    <script" + (jade.attr("src", '' + (rootPath) + '/vendor/bootstrap/docs/assets/js/bootstrap.js', true, true)) + "></script>\n    <script" + (jade.attr("src", '' + (rootPath) + '/js/clienstrum.js', true, true)) + "></script>\n    <script>var root = '" + (jade.escape((jade_interp = rootPath) == null ? '' : jade_interp)) + "';</script>" + (null == (jade_interp = renderedHead) ? "" : jade_interp) + "" + (((jade_interp = global_head) == null ? '' : jade_interp)) + "\n    <script" + (jade.attr("src", '' + (rootPath) + '/js/maps.js', true, true)) + "></script>\n  </head>\n  <body>");
if (!dialog)
{
buf.push("\n    <header class=\"navbar navbar-static-top\">\n      <div class=\"navbar-inner\">\n        <div class=\"container\">\n          <div class=\"btn-group pull-right\"><a" + (jade.attr("href", '' + (rootPath) + '/', true, true)) + " class=\"btn btn-inverse\"><i class=\"icon-home icon-white\"></i>&nbsp;Admin</a><a href=\"/\" class=\"btn\"><i class=\"icon-share\"></i>&nbsp;Site</a><a" + (jade.attr("href", '' + (rootPath) + '/logout', true, true)) + " class=\"btn\">\n              <div class=\"icon-lock\"></div>&nbsp;Logout</a></div>\n          <h1><a" + (jade.attr("href", '' + (rootPath) + '/', true, true)) + ">" + (jade.escape((jade_interp = adminTitle) == null ? '' : jade_interp)) + "</a>\n          </h1>\n        </div>\n      </div>\n    </header>");
}
buf.push("\n    <div class=\"container-fluid formage\">\n      <div id=\"content\">\n      </div>");
if (!dialog)
{
buf.push("\n      <footer class=\"footer\">");
if (userPanel)
{
buf.push("\n        <p class=\"user-panel\">" + (((jade_interp = userPanel) == null ? '' : jade_interp)) + "</p>");
}
buf.push("\n        <p><a href=\"http://github.com/Empeeric/formage\">Formage</a>&nbsp;" + (jade.escape((jade_interp = version) == null ? '' : jade_interp)) + ", from&nbsp;<a href=\"http://empeeric.com\">Empeeric</a></p><a href=\"http://github.com/Empeeric/formage\"><img" + (jade.attr("src", '' + (rootPath) + '/images/logo-40.png', true, true)) + "></a>\n      </footer>");
}
buf.push("\n      <div id=\"old-version\" hidden class=\"alert alert-error\">\n        <button type=\"button\" data-dismiss=\"alert\" class=\"close\">&times;</button><strong>Warning;</strong>There is a newer version of formage.\n      </div>\n    </div>\n    <script>\n      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n      \n      ga('create', 'UA-15378843-16', 'auto');\n      ga('send', 'pageview');\n      \n    </script>" + (((jade_interp = global_script) == null ? '' : jade_interp)) + "\n  </body>\n</html>");}.call(this,"adminTitle" in locals_for_with?locals_for_with.adminTitle:typeof adminTitle!=="undefined"?adminTitle:undefined,"dialog" in locals_for_with?locals_for_with.dialog:typeof dialog!=="undefined"?dialog:undefined,"global_head" in locals_for_with?locals_for_with.global_head:typeof global_head!=="undefined"?global_head:undefined,"global_script" in locals_for_with?locals_for_with.global_script:typeof global_script!=="undefined"?global_script:undefined,"pageTitle" in locals_for_with?locals_for_with.pageTitle:typeof pageTitle!=="undefined"?pageTitle:undefined,"renderedHead" in locals_for_with?locals_for_with.renderedHead:typeof renderedHead!=="undefined"?renderedHead:undefined,"rootPath" in locals_for_with?locals_for_with.rootPath:typeof rootPath!=="undefined"?rootPath:undefined,"userPanel" in locals_for_with?locals_for_with.userPanel:typeof userPanel!=="undefined"?userPanel:undefined,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));;return buf.join("");
}; 

module.exports.login = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (adminTitle, dialog, error, global_head, global_script, pageTitle, renderedHead, rootPath, userPanel, version) {
var jade_indent = [];
buf.push("<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <title>" + (null == (jade_interp = pageTitle) ? "" : jade_interp) + "</title>\n    <link rel=\"stylesheet\"" + (jade.attr("href", '' + (rootPath) + '/lightness/jquery-ui.css', true, true)) + ">\n    <link rel=\"stylesheet\"" + (jade.attr("href", '' + (rootPath) + '/vendor/bootstrap/docs/assets/css/bootstrap.css', true, true)) + ">\n    <link rel=\"stylesheet\"" + (jade.attr("href", '' + (rootPath) + '/css/main.css', true, true)) + ">\n    <script" + (jade.attr("src", '' + (rootPath) + '/vendor/jquery/jquery.js', true, true)) + "></script>\n    <script" + (jade.attr("src", '' + (rootPath) + '/lightness/jquery-ui.js', true, true)) + "></script>\n    <script" + (jade.attr("src", '' + (rootPath) + '/vendor/bootstrap/docs/assets/js/bootstrap.js', true, true)) + "></script>\n    <script" + (jade.attr("src", '' + (rootPath) + '/js/clienstrum.js', true, true)) + "></script>\n    <script>var root = '" + (jade.escape((jade_interp = rootPath) == null ? '' : jade_interp)) + "';</script>" + (null == (jade_interp = renderedHead) ? "" : jade_interp) + "" + (((jade_interp = global_head) == null ? '' : jade_interp)) + "\n    <script" + (jade.attr("src", '' + (rootPath) + '/js/maps.js', true, true)) + "></script>\n  </head>\n  <body>");
if (!dialog)
{
buf.push("\n    <header class=\"navbar navbar-static-top\">\n      <div class=\"navbar-inner\">\n        <div class=\"container\">\n          <h1><a" + (jade.attr("href", '' + (rootPath) + '/', true, true)) + ">" + (jade.escape((jade_interp = adminTitle) == null ? '' : jade_interp)) + "</a>\n          </h1>\n        </div>\n      </div>\n    </header>");
}
buf.push("\n    <div class=\"container-fluid formage\">\n      <div id=\"content\">\n        <form id=\"login\" role=\"form\" method=\"post\" action=\"#\" class=\"form-horizontal\">");
if ( (error))
{
buf.push("\n          <p class=\"controls\"><strong class=\"text-error\">Wrong username or password.</strong></p>");
}
buf.push("\n          <div class=\"control-group\">\n            <label for=\"username\" class=\"control-label\">Username</label>\n            <div class=\"controls\">\n              <input id=\"username\" type=\"text\" name=\"username\">\n            </div>\n          </div>\n          <div class=\"control-group\">\n            <label for=\"password\" class=\"control-label\">Password</label>\n            <div class=\"controls\">\n              <input id=\"password\" type=\"password\" name=\"password\">\n            </div>\n          </div>\n          <div class=\"controls\">\n            <button id=\"loginButton\" type=\"submit\" class=\"btn\">Login</button>\n          </div>\n        </form>\n      </div>");
if (!dialog)
{
buf.push("\n      <footer class=\"footer\">");
if (userPanel)
{
buf.push("\n        <p class=\"user-panel\">" + (((jade_interp = userPanel) == null ? '' : jade_interp)) + "</p>");
}
buf.push("\n        <p><a href=\"http://github.com/Empeeric/formage\">Formage</a>&nbsp;" + (jade.escape((jade_interp = version) == null ? '' : jade_interp)) + ", from&nbsp;<a href=\"http://empeeric.com\">Empeeric</a></p><a href=\"http://github.com/Empeeric/formage\"><img" + (jade.attr("src", '' + (rootPath) + '/images/logo-40.png', true, true)) + "></a>\n      </footer>");
}
buf.push("\n      <div id=\"old-version\" hidden class=\"alert alert-error\">\n        <button type=\"button\" data-dismiss=\"alert\" class=\"close\">&times;</button><strong>Warning;</strong>There is a newer version of formage.\n      </div>\n    </div>\n    <script>\n      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n      \n      ga('create', 'UA-15378843-16', 'auto');\n      ga('send', 'pageview');\n      \n    </script>" + (((jade_interp = global_script) == null ? '' : jade_interp)) + "\n  </body>\n</html>");}.call(this,"adminTitle" in locals_for_with?locals_for_with.adminTitle:typeof adminTitle!=="undefined"?adminTitle:undefined,"dialog" in locals_for_with?locals_for_with.dialog:typeof dialog!=="undefined"?dialog:undefined,"error" in locals_for_with?locals_for_with.error:typeof error!=="undefined"?error:undefined,"global_head" in locals_for_with?locals_for_with.global_head:typeof global_head!=="undefined"?global_head:undefined,"global_script" in locals_for_with?locals_for_with.global_script:typeof global_script!=="undefined"?global_script:undefined,"pageTitle" in locals_for_with?locals_for_with.pageTitle:typeof pageTitle!=="undefined"?pageTitle:undefined,"renderedHead" in locals_for_with?locals_for_with.renderedHead:typeof renderedHead!=="undefined"?renderedHead:undefined,"rootPath" in locals_for_with?locals_for_with.rootPath:typeof rootPath!=="undefined"?rootPath:undefined,"userPanel" in locals_for_with?locals_for_with.userPanel:typeof userPanel!=="undefined"?userPanel:undefined,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));;return buf.join("");
}; 

module.exports.model = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (String, actions, adminTitle, cdn_url, cloneable, count, creatable, current_filters, dataTable, dialog, filters, global_head, global_script, label, makeLink, model_name, newTypes, pageTitle, renderedHead, rootPath, search, search_value, sortable, start, total_count, undefined, userPanel, version) {
var jade_indent = [];
jade_mixins["fielddesc"] = jade_interp = function(value, type, document_url){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var value_url = value && value.url;
var cloudinary_url = value_url && value.url.split('/upload/')[0] + '/upload/c_fill,h_80,w_80/' + value.public_id + '.png';
var geomery = value && value.geometry && value.geometry.lat + ',' + value.geometry.lng;
var maps_url = geomery && 'https://maps.google.com/?q=' + geomery;
var filename = value && value.filename;
var date_string = value && value.toISOString ? value.toISOString().split('T')[0] : '';
switch (type){
case 'Picture':
buf.push("<a" + (jade.attr("href", value_url, true, false)) + " target=\"_blank\"><img" + (jade.attr("src", cloudinary_url, true, false)) + "/></a>");
  break;
case 'Html':
buf.push(null == (jade_interp = value) ? "" : jade_interp);
  break;
case 'Filepicker':
if (value)
{
buf.push("<a" + (jade.attr("href", value_url, true, false)) + " target=\"_blank\">");
if (value.isWriteable && value.mimetype.indexOf('image') != 0)
{
buf.push(jade.escape(null == (jade_interp = filename) ? "" : jade_interp));
}
else
{
buf.push("\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<cdn_url>= (value_url || \"\").replace('https', 'http').replace('www.filepicker.io', 'cdn.empeeric.com');</cdn_url>");
if (~cdn_url.indexOf('cdn.empeeric.com'))
{
buf.push("<img" + (jade.attr("src", cdn_url+'/convert?fit=crop&w=80&h=80', true, false)) + "/>");
}
}
buf.push("</a>");
}
  break;
case 'File':
buf.push("<a" + (jade.attr("href", value_url, true, false)) + " target=\"_blank\">" + (jade.escape(null == (jade_interp = filename) ? "" : jade_interp)) + "</a>");
  break;
case 'GeoPoint':
buf.push("<a" + (jade.attr("href", maps_url, true, false)) + " target=\"_blank\">" + (jade.escape(null == (jade_interp = geomery) ? "" : jade_interp)) + "</a>");
  break;
case 'Boolean':
buf.push("\n");
buf.push.apply(buf, jade_indent);
buf.push("<div class=\"bool\"><i" + (jade.cls([(value ? 'icon-ok' : 'icon-remove')], [true])) + "></i></div>");
  break;
case 'Date':
buf.push("<a" + (jade.attr("href", document_url, true, false)) + ">" + (jade.escape(null == (jade_interp = date_string) ? "" : jade_interp)) + "</a>");
  break;
default:
buf.push("<a" + (jade.attr("href", document_url, true, false)) + ">" + (jade.escape(null == (jade_interp = value) ? "" : jade_interp)) + "</a>");
  break;
}
};
buf.push("<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <title>" + (null == (jade_interp = pageTitle) ? "" : jade_interp) + "</title>\n    <link rel=\"stylesheet\"" + (jade.attr("href", '' + (rootPath) + '/lightness/jquery-ui.css', true, true)) + ">\n    <link rel=\"stylesheet\"" + (jade.attr("href", '' + (rootPath) + '/vendor/bootstrap/docs/assets/css/bootstrap.css', true, true)) + ">\n    <link rel=\"stylesheet\"" + (jade.attr("href", '' + (rootPath) + '/css/main.css', true, true)) + ">\n    <script" + (jade.attr("src", '' + (rootPath) + '/vendor/jquery/jquery.js', true, true)) + "></script>\n    <script" + (jade.attr("src", '' + (rootPath) + '/lightness/jquery-ui.js', true, true)) + "></script>\n    <script" + (jade.attr("src", '' + (rootPath) + '/vendor/bootstrap/docs/assets/js/bootstrap.js', true, true)) + "></script>\n    <script" + (jade.attr("src", '' + (rootPath) + '/js/clienstrum.js', true, true)) + "></script>\n    <script>var root = '" + (jade.escape((jade_interp = rootPath) == null ? '' : jade_interp)) + "';</script>" + (null == (jade_interp = renderedHead) ? "" : jade_interp) + "" + (((jade_interp = global_head) == null ? '' : jade_interp)) + "\n    <script" + (jade.attr("src", '' + (rootPath) + '/js/maps.js', true, true)) + "></script>\n  </head>\n  <body>");
if (!dialog)
{
buf.push("\n    <header class=\"navbar navbar-static-top\">\n      <div class=\"navbar-inner\">\n        <div class=\"container\">\n          <div class=\"btn-group pull-right\"><a" + (jade.attr("href", '' + (rootPath) + '/', true, true)) + " class=\"btn btn-inverse\"><i class=\"icon-home icon-white\"></i>&nbsp;Admin</a><a href=\"/\" class=\"btn\"><i class=\"icon-share\"></i>&nbsp;Site</a><a" + (jade.attr("href", '' + (rootPath) + '/logout', true, true)) + " class=\"btn\">\n              <div class=\"icon-lock\"></div>&nbsp;Logout</a></div>\n          <h1><a" + (jade.attr("href", '' + (rootPath) + '/', true, true)) + ">" + (jade.escape((jade_interp = adminTitle) == null ? '' : jade_interp)) + "</a><span class=\"divider\">/</span>" + (jade.escape((jade_interp = label) == null ? '' : jade_interp)) + "</h1>\n        </div>\n      </div>\n    </header>");
}
buf.push("\n    <div class=\"container-fluid formage\">\n      <div id=\"content\">\n        <div class=\"page-header\">\n          <h2>" + (jade.escape((jade_interp = label) == null ? '' : jade_interp)) + "</h2>\n        </div>\n        <div id=\"content\" class=\"clearfix\">");
if (filters.length)
{
buf.push("\n          <div id=\"filters\">\n            <div class=\"well\">\n              <h3><i class=\"icon-filter\"></i>Filters<small class=\"pull-right\"><a" + (jade.attr("href", '' + (rootPath) + '/model/' + (model_name) + '', true, true)) + ">Clear</a></small></h3>\n              <ul class=\"nav nav-list\">");
// iterate filters
;(function(){
  var $$obj = filters;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var filter = $$obj[$index];

buf.push("\n                <li class=\"nav-header\"><strong>" + (jade.escape((jade_interp = filter.key) == null ? '' : jade_interp)) + ":</strong></li>");
if (current_filters[filter.key])
{
buf.push("\n                <li><a" + (jade.attr("href", '' + (makeLink(filter.key,"")) + '', true, true)) + ">All</a></li>");
}
else
{
buf.push("\n                <li class=\"active\"><strong>All</strong></li>");
}
// iterate filter.values
;(function(){
  var $$obj = filter.values;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var value = $$obj[$index];

if (value)
{
buf.push("\n                <li>");
if (current_filters[filter.key] !== String(value.value) )
{
buf.push("<a" + (jade.attr("href", '' + (makeLink(filter.key, value.value)) + '', true, true)) + ">" + (jade.escape((jade_interp = value.text) == null ? '' : jade_interp)) + "</a>");
}
else
{
buf.push("<strong>" + (jade.escape((jade_interp = value.text) == null ? '' : jade_interp)) + "</strong>");
}
buf.push("\n                </li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var value = $$obj[$index];

if (value)
{
buf.push("\n                <li>");
if (current_filters[filter.key] !== String(value.value) )
{
buf.push("<a" + (jade.attr("href", '' + (makeLink(filter.key, value.value)) + '', true, true)) + ">" + (jade.escape((jade_interp = value.text) == null ? '' : jade_interp)) + "</a>");
}
else
{
buf.push("<strong>" + (jade.escape((jade_interp = value.text) == null ? '' : jade_interp)) + "</strong>");
}
buf.push("\n                </li>");
}
    }

  }
}).call(this);

if (filter.isString)
{
buf.push("\n                <div class=\"input-append\">\n                  <input type=\"text\"" + (jade.attr("name", '' + (filter.key) + '', true, true)) + (jade.attr("value", '' + (current_filters[filter.key] || "") + '', true, true)) + " class=\"literal\"><span class=\"add-on\">\n                    <button" + (jade.attr("data-href", '' + (makeLink(filter.key, "__replace__")) + '', true, true)) + " class=\"icon-calendar free_search\"></button></span>\n                </div>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var filter = $$obj[$index];

buf.push("\n                <li class=\"nav-header\"><strong>" + (jade.escape((jade_interp = filter.key) == null ? '' : jade_interp)) + ":</strong></li>");
if (current_filters[filter.key])
{
buf.push("\n                <li><a" + (jade.attr("href", '' + (makeLink(filter.key,"")) + '', true, true)) + ">All</a></li>");
}
else
{
buf.push("\n                <li class=\"active\"><strong>All</strong></li>");
}
// iterate filter.values
;(function(){
  var $$obj = filter.values;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var value = $$obj[$index];

if (value)
{
buf.push("\n                <li>");
if (current_filters[filter.key] !== String(value.value) )
{
buf.push("<a" + (jade.attr("href", '' + (makeLink(filter.key, value.value)) + '', true, true)) + ">" + (jade.escape((jade_interp = value.text) == null ? '' : jade_interp)) + "</a>");
}
else
{
buf.push("<strong>" + (jade.escape((jade_interp = value.text) == null ? '' : jade_interp)) + "</strong>");
}
buf.push("\n                </li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var value = $$obj[$index];

if (value)
{
buf.push("\n                <li>");
if (current_filters[filter.key] !== String(value.value) )
{
buf.push("<a" + (jade.attr("href", '' + (makeLink(filter.key, value.value)) + '', true, true)) + ">" + (jade.escape((jade_interp = value.text) == null ? '' : jade_interp)) + "</a>");
}
else
{
buf.push("<strong>" + (jade.escape((jade_interp = value.text) == null ? '' : jade_interp)) + "</strong>");
}
buf.push("\n                </li>");
}
    }

  }
}).call(this);

if (filter.isString)
{
buf.push("\n                <div class=\"input-append\">\n                  <input type=\"text\"" + (jade.attr("name", '' + (filter.key) + '', true, true)) + (jade.attr("value", '' + (current_filters[filter.key] || "") + '', true, true)) + " class=\"literal\"><span class=\"add-on\">\n                    <button" + (jade.attr("data-href", '' + (makeLink(filter.key, "__replace__")) + '', true, true)) + " class=\"icon-calendar free_search\"></button></span>\n                </div>");
}
    }

  }
}).call(this);

buf.push("\n              </ul>\n            </div>\n          </div>");
}
buf.push("\n          <div>\n            <div class=\"btn-toolbar clearfix\">");
if (creatable)
{
if (newTypes.length === 0)
{
buf.push("<a" + (jade.attr("href", "" + (rootPath) + "/model/" + (model_name) + "/document/new" + (makeLink()) + "", true, true)) + " class=\"btn pull-right btn-warning\"><i class=\"icon-plus icon-white\"></i>&nbsp;New Item&nbsp;</a>");
}
else
{
buf.push("\n              <div class=\"btn-group pull-right\">\n                <button type=\"button\" data-toggle=\"dropdown\" class=\"btn btn-warning dropdown-toggle\"><i class=\"icon-plus icon-white\"></i>&nbsp;New Item&nbsp;</button>\n                <ul class=\"dropdown-menu\">");
// iterate newTypes
;(function(){
  var $$obj = newTypes;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var type = $$obj[$index];

buf.push("\n                  <li><a" + (jade.attr("href", "" + (rootPath) + "/model/" + (type) + "/document/new" + (makeLink()) + "", true, true)) + ">" + (jade.escape((jade_interp = type) == null ? '' : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var type = $$obj[$index];

buf.push("\n                  <li><a" + (jade.attr("href", "" + (rootPath) + "/model/" + (type) + "/document/new" + (makeLink()) + "", true, true)) + ">" + (jade.escape((jade_interp = type) == null ? '' : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("\n                </ul>\n              </div>");
}
}
if (search)
{
buf.push("\n              <div>\n                <form class=\"form-inline\">\n                  <input type=\"text\" name=\"_search\"" + (jade.attr("value", "" + (search_value) + "", true, true)) + " class=\"span5\">");
for(var key in current_filters)
{
if(key != "_search")
{
buf.push("\n                  <input type=\"hidden\"" + (jade.attr("name", "" + (key) + "", true, true)) + (jade.attr("value", "" + (current_filters[key]) + "", true, true)) + ">");
}
}
if(dialog)
{
buf.push("\n                  <input type=\"hidden\" name=\"_dialog\" value=\"yes\">");
}
buf.push("\n                  <button type=\"submit\" class=\"btn\">Search</button>\n                </form>\n              </div>");
}
if (sortable)
{
buf.push("\n              <button id=\"reorder\" data-loading-text=\"Saving...\" data-saved-text=\"Saved!\" class=\"btn btn-success pull-left hide\"><i class=\"icon-ok icon-white\"></i>Save Order</button>");
}
if (actions.length && dataTable.data.length)
{
buf.push("\n              <div id=\"actions\" class=\"input-prepend hide\"><span class=\"add-on\">With selected: &nbsp;</span>\n                <div class=\"btn-group\">");
// iterate actions
;(function(){
  var $$obj = actions;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var action = $$obj[$index];

if ( (action.id == 'delete'))
{
buf.push("\n                  <button" + (jade.attr("value", '' + (action.id) + '', true, true)) + " class=\"btn btn-danger\"><i class=\"icon-trash icon-white\"></i>&nbsp;" + (jade.escape((jade_interp = action.label) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("\n                  <button" + (jade.attr("value", '' + (action.id) + '', true, true)) + " class=\"btn\">" + (jade.escape((jade_interp = action.label) == null ? '' : jade_interp)) + "</button>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var action = $$obj[$index];

if ( (action.id == 'delete'))
{
buf.push("\n                  <button" + (jade.attr("value", '' + (action.id) + '', true, true)) + " class=\"btn btn-danger\"><i class=\"icon-trash icon-white\"></i>&nbsp;" + (jade.escape((jade_interp = action.label) == null ? '' : jade_interp)) + "</button>");
}
else
{
buf.push("\n                  <button" + (jade.attr("value", '' + (action.id) + '', true, true)) + " class=\"btn\">" + (jade.escape((jade_interp = action.label) == null ? '' : jade_interp)) + "</button>");
}
    }

  }
}).call(this);

buf.push("\n                </div>\n              </div>");
}
buf.push("\n            </div>");
if (!dataTable.data.length)
{
buf.push("\n            <p class=\"center\">No documents yet</p>");
}
else
{
buf.push("\n            <p class=\"counter\">Viewing " + (jade.escape((jade_interp = start+1) == null ? '' : jade_interp)) + "–" + (jade.escape((jade_interp = start + dataTable.data.length) == null ? '' : jade_interp)) + " of " + (jade.escape((jade_interp = total_count) == null ? '' : jade_interp)) + " documents</p>\n            <table class=\"table table-bordered table-hover\">\n              <colgroup class=\"selectors\">\n                <col width=\"60\" class=\"center\">\n              </colgroup>\n              <colgroup>");
// iterate dataTable.header
;(function(){
  var $$obj = dataTable.header;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var field = $$obj[$index];

buf.push("\n                <col" + (jade.cls([field.thClass], [true])) + ">");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var field = $$obj[$index];

buf.push("\n                <col" + (jade.cls([field.thClass], [true])) + ">");
    }

  }
}).call(this);

buf.push("\n              </colgroup>");
if ( cloneable)
{
buf.push("\n              <colgroup class=\"buttons\">\n                <col width=\"130\">\n              </colgroup>");
}
buf.push("\n              <thead>\n                <tr>\n                  <th class=\"center\">\n                    <input type=\"checkbox\" class=\"select-all-rows\">\n                  </th>");
// iterate dataTable.header
;(function(){
  var $$obj = dataTable.header;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var field = $$obj[$index];

buf.push("\n                  <th><a" + (jade.attr("href", field.href, true, true)) + ">" + (jade.escape((jade_interp = field.label) == null ? '' : jade_interp)) + "</a></th>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var field = $$obj[$index];

buf.push("\n                  <th><a" + (jade.attr("href", field.href, true, true)) + ">" + (jade.escape((jade_interp = field.label) == null ? '' : jade_interp)) + "</a></th>");
    }

  }
}).call(this);

if ( cloneable)
{
buf.push("\n                  <th>&nbsp;</th>");
}
buf.push("\n                </tr>\n              </thead>\n              <tbody" + (jade.cls([sortable?'sortable':''], [true])) + ">");
// iterate dataTable.data
;(function(){
  var $$obj = dataTable.data;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var row = $$obj[$index];

var document_url = rootPath + '/model/' + model_name + '/document/' + row.id
buf.push("\n                <tr" + (jade.attr("id", row.id, true, true)) + ">\n                  <td class=\"center\">\n                    <input type=\"checkbox\" class=\"select-row\">");
if ( sortable)
{
buf.push("<span class=\"list-drag\"><i class=\"icon-resize-vertical\"></i></span>");
}
buf.push("\n                  </td>");
// iterate row.data
;(function(){
  var $$obj = row.data;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var field = $$obj[$index];

buf.push("\n                  <td>");
jade_indent.push('                    ');
jade_mixins["fielddesc"](field.value, field.type, document_url);
jade_indent.pop();
buf.push("\n                  </td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var field = $$obj[$index];

buf.push("\n                  <td>");
jade_indent.push('                    ');
jade_mixins["fielddesc"](field.value, field.type, document_url);
jade_indent.pop();
buf.push("\n                  </td>");
    }

  }
}).call(this);

buf.push("\n                  <td>\n                    <div class=\"btn-group\"><a" + (jade.attr("href", document_url, true, true)) + " class=\"btn btn-primary\">Edit</a>");
if ( cloneable)
{
buf.push("<a" + (jade.attr("href", "" + (rootPath) + "/model/" + (model_name) + "/document/new?orig=" + (row.id) + "", true, true)) + " class=\"btn btn-default\">Duplicate</a>");
}
buf.push("\n                    </div>\n                  </td>\n                </tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var row = $$obj[$index];

var document_url = rootPath + '/model/' + model_name + '/document/' + row.id
buf.push("\n                <tr" + (jade.attr("id", row.id, true, true)) + ">\n                  <td class=\"center\">\n                    <input type=\"checkbox\" class=\"select-row\">");
if ( sortable)
{
buf.push("<span class=\"list-drag\"><i class=\"icon-resize-vertical\"></i></span>");
}
buf.push("\n                  </td>");
// iterate row.data
;(function(){
  var $$obj = row.data;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var field = $$obj[$index];

buf.push("\n                  <td>");
jade_indent.push('                    ');
jade_mixins["fielddesc"](field.value, field.type, document_url);
jade_indent.pop();
buf.push("\n                  </td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var field = $$obj[$index];

buf.push("\n                  <td>");
jade_indent.push('                    ');
jade_mixins["fielddesc"](field.value, field.type, document_url);
jade_indent.pop();
buf.push("\n                  </td>");
    }

  }
}).call(this);

buf.push("\n                  <td>\n                    <div class=\"btn-group\"><a" + (jade.attr("href", document_url, true, true)) + " class=\"btn btn-primary\">Edit</a>");
if ( cloneable)
{
buf.push("<a" + (jade.attr("href", "" + (rootPath) + "/model/" + (model_name) + "/document/new?orig=" + (row.id) + "", true, true)) + " class=\"btn btn-default\">Duplicate</a>");
}
buf.push("\n                    </div>\n                  </td>\n                </tr>");
    }

  }
}).call(this);

buf.push("\n              </tbody>\n            </table>\n            <p class=\"counter\">Viewing " + (jade.escape((jade_interp = start+1) == null ? '' : jade_interp)) + "–" + (jade.escape((jade_interp = start + dataTable.data.length) == null ? '' : jade_interp)) + " of " + (jade.escape((jade_interp = total_count) == null ? '' : jade_interp)) + " documents</p>");
if (total_count > count)
{
buf.push("\n            <div class=\"pagination\">\n              <ul>");
for (var i = 0, page = 1; i < total_count; i += count, page++)
{
if (start == i)
{
buf.push("\n                <li class=\"active\"><span>" + (jade.escape((jade_interp = page) == null ? '' : jade_interp)) + "</span></li>");
}
else if (start/count <= page+5 && start/count >= page-5 || i == 0 || i+count >= total_count)
{
buf.push("\n                <li><a" + (jade.attr("href", '' + (makeLink("start",i)) + '', true, true)) + ">" + (jade.escape((jade_interp = page) == null ? '' : jade_interp)) + "</a></li>");
}
}
buf.push("\n              </ul>\n            </div>");
}
}
buf.push("\n          </div>\n        </div>\n      </div>");
if (!dialog)
{
buf.push("\n      <footer class=\"footer\">");
if (userPanel)
{
buf.push("\n        <p class=\"user-panel\">" + (((jade_interp = userPanel) == null ? '' : jade_interp)) + "</p>");
}
buf.push("\n        <p><a href=\"http://github.com/Empeeric/formage\">Formage</a>&nbsp;" + (jade.escape((jade_interp = version) == null ? '' : jade_interp)) + ", from&nbsp;<a href=\"http://empeeric.com\">Empeeric</a></p><a href=\"http://github.com/Empeeric/formage\"><img" + (jade.attr("src", '' + (rootPath) + '/images/logo-40.png', true, true)) + "></a>\n      </footer>");
}
buf.push("\n      <div id=\"old-version\" hidden class=\"alert alert-error\">\n        <button type=\"button\" data-dismiss=\"alert\" class=\"close\">&times;</button><strong>Warning;</strong>There is a newer version of formage.\n      </div>\n    </div>\n    <script>\n      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n      \n      ga('create', 'UA-15378843-16', 'auto');\n      ga('send', 'pageview');\n      \n    </script>\n    <script>\n      var startIndex = [" + (jade.escape((jade_interp = start) == null ? '' : jade_interp)) + "][0];\n      var model = '" + (jade.escape((jade_interp = model_name) == null ? '' : jade_interp)) + "';\n      \n    </script>\n    <script" + (jade.attr("src", "" + (rootPath) + "/vendor/bootbox/bootbox.js", true, true)) + "></script>\n    <script" + (jade.attr("src", "" + (rootPath) + "/js/model.js", true, true)) + "></script>" + (((jade_interp = global_script) == null ? '' : jade_interp)) + "\n  </body>\n</html>");}.call(this,"String" in locals_for_with?locals_for_with.String:typeof String!=="undefined"?String:undefined,"actions" in locals_for_with?locals_for_with.actions:typeof actions!=="undefined"?actions:undefined,"adminTitle" in locals_for_with?locals_for_with.adminTitle:typeof adminTitle!=="undefined"?adminTitle:undefined,"cdn_url" in locals_for_with?locals_for_with.cdn_url:typeof cdn_url!=="undefined"?cdn_url:undefined,"cloneable" in locals_for_with?locals_for_with.cloneable:typeof cloneable!=="undefined"?cloneable:undefined,"count" in locals_for_with?locals_for_with.count:typeof count!=="undefined"?count:undefined,"creatable" in locals_for_with?locals_for_with.creatable:typeof creatable!=="undefined"?creatable:undefined,"current_filters" in locals_for_with?locals_for_with.current_filters:typeof current_filters!=="undefined"?current_filters:undefined,"dataTable" in locals_for_with?locals_for_with.dataTable:typeof dataTable!=="undefined"?dataTable:undefined,"dialog" in locals_for_with?locals_for_with.dialog:typeof dialog!=="undefined"?dialog:undefined,"filters" in locals_for_with?locals_for_with.filters:typeof filters!=="undefined"?filters:undefined,"global_head" in locals_for_with?locals_for_with.global_head:typeof global_head!=="undefined"?global_head:undefined,"global_script" in locals_for_with?locals_for_with.global_script:typeof global_script!=="undefined"?global_script:undefined,"label" in locals_for_with?locals_for_with.label:typeof label!=="undefined"?label:undefined,"makeLink" in locals_for_with?locals_for_with.makeLink:typeof makeLink!=="undefined"?makeLink:undefined,"model_name" in locals_for_with?locals_for_with.model_name:typeof model_name!=="undefined"?model_name:undefined,"newTypes" in locals_for_with?locals_for_with.newTypes:typeof newTypes!=="undefined"?newTypes:undefined,"pageTitle" in locals_for_with?locals_for_with.pageTitle:typeof pageTitle!=="undefined"?pageTitle:undefined,"renderedHead" in locals_for_with?locals_for_with.renderedHead:typeof renderedHead!=="undefined"?renderedHead:undefined,"rootPath" in locals_for_with?locals_for_with.rootPath:typeof rootPath!=="undefined"?rootPath:undefined,"search" in locals_for_with?locals_for_with.search:typeof search!=="undefined"?search:undefined,"search_value" in locals_for_with?locals_for_with.search_value:typeof search_value!=="undefined"?search_value:undefined,"sortable" in locals_for_with?locals_for_with.sortable:typeof sortable!=="undefined"?sortable:undefined,"start" in locals_for_with?locals_for_with.start:typeof start!=="undefined"?start:undefined,"total_count" in locals_for_with?locals_for_with.total_count:typeof total_count!=="undefined"?total_count:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"userPanel" in locals_for_with?locals_for_with.userPanel:typeof userPanel!=="undefined"?userPanel:undefined,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));;return buf.join("");
}; 

module.exports.models = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (adminTitle, dialog, global_head, global_script, pageTitle, renderedHead, rootPath, sections, undefined, userPanel, version) {
var jade_indent = [];
buf.push("<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <title>" + (null == (jade_interp = pageTitle) ? "" : jade_interp) + "</title>\n    <link rel=\"stylesheet\"" + (jade.attr("href", '' + (rootPath) + '/lightness/jquery-ui.css', true, true)) + ">\n    <link rel=\"stylesheet\"" + (jade.attr("href", '' + (rootPath) + '/vendor/bootstrap/docs/assets/css/bootstrap.css', true, true)) + ">\n    <link rel=\"stylesheet\"" + (jade.attr("href", '' + (rootPath) + '/css/main.css', true, true)) + ">\n    <script" + (jade.attr("src", '' + (rootPath) + '/vendor/jquery/jquery.js', true, true)) + "></script>\n    <script" + (jade.attr("src", '' + (rootPath) + '/lightness/jquery-ui.js', true, true)) + "></script>\n    <script" + (jade.attr("src", '' + (rootPath) + '/vendor/bootstrap/docs/assets/js/bootstrap.js', true, true)) + "></script>\n    <script" + (jade.attr("src", '' + (rootPath) + '/js/clienstrum.js', true, true)) + "></script>\n    <script>var root = '" + (jade.escape((jade_interp = rootPath) == null ? '' : jade_interp)) + "';</script>" + (null == (jade_interp = renderedHead) ? "" : jade_interp) + "" + (((jade_interp = global_head) == null ? '' : jade_interp)) + "\n    <script" + (jade.attr("src", '' + (rootPath) + '/js/maps.js', true, true)) + "></script>\n  </head>\n  <body>");
if (!dialog)
{
buf.push("\n    <header class=\"navbar navbar-static-top\">\n      <div class=\"navbar-inner\">\n        <div class=\"container\">\n          <div class=\"btn-group pull-right\"><a" + (jade.attr("href", '' + (rootPath) + '/', true, true)) + " class=\"btn btn-inverse\"><i class=\"icon-home icon-white\"></i>&nbsp;Admin</a><a href=\"/\" class=\"btn\"><i class=\"icon-share\"></i>&nbsp;Site</a><a" + (jade.attr("href", '' + (rootPath) + '/logout', true, true)) + " class=\"btn\">\n              <div class=\"icon-lock\"></div>&nbsp;Logout</a></div>\n          <h1><a" + (jade.attr("href", '' + (rootPath) + '/', true, true)) + ">" + (jade.escape((jade_interp = adminTitle) == null ? '' : jade_interp)) + "</a>\n          </h1>\n        </div>\n      </div>\n    </header>");
}
buf.push("\n    <div class=\"container-fluid formage\">\n      <div id=\"content\">");
// iterate sections
;(function(){
  var $$obj = sections;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var section = $$obj[$index];

buf.push("\n        <section class=\"row-fluid\">\n          <h2><span>" + (jade.escape((jade_interp = section.name) == null ? '' : jade_interp)) + "</span></h2>\n          <ul class=\"models\">");
// iterate section.models
;(function(){
  var $$obj = section.models;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var modelConfig = $$obj[$index];

var url = rootPath + '/model/' + modelConfig.modelName
buf.push("\n            <li>\n              <div class=\"btn-group pull-right\">");
if (modelConfig.is_single)
{
buf.push("<a" + (jade.attr("href", '' + (url) + '/document/single', true, true)) + " class=\"btn btn-default\">Edit</a>");
}
else
{
buf.push("<a" + (jade.attr("href", url, true, true)) + " class=\"btn btn-info\"><span" + (jade.attr("id", 'viewAll_' + (modelConfig.modelName) + '', true, true)) + ">View All</span></a>");
if (!modelConfig.model.discriminators || modelConfig.model.discriminators.length == 0)
{
buf.push("<a" + (jade.attr("href", '' + (url) + '/document/new', true, true)) + " class=\"btn btn-default\">New</a>");
}
}
buf.push("\n              </div><a" + (jade.attr("href", url + (modelConfig.is_single ? '/document/single' : ''), true, true)) + ">\n                <h3>" + (jade.escape((jade_interp = modelConfig.label) == null ? '' : jade_interp)) + "</h3></a>\n            </li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var modelConfig = $$obj[$index];

var url = rootPath + '/model/' + modelConfig.modelName
buf.push("\n            <li>\n              <div class=\"btn-group pull-right\">");
if (modelConfig.is_single)
{
buf.push("<a" + (jade.attr("href", '' + (url) + '/document/single', true, true)) + " class=\"btn btn-default\">Edit</a>");
}
else
{
buf.push("<a" + (jade.attr("href", url, true, true)) + " class=\"btn btn-info\"><span" + (jade.attr("id", 'viewAll_' + (modelConfig.modelName) + '', true, true)) + ">View All</span></a>");
if (!modelConfig.model.discriminators || modelConfig.model.discriminators.length == 0)
{
buf.push("<a" + (jade.attr("href", '' + (url) + '/document/new', true, true)) + " class=\"btn btn-default\">New</a>");
}
}
buf.push("\n              </div><a" + (jade.attr("href", url + (modelConfig.is_single ? '/document/single' : ''), true, true)) + ">\n                <h3>" + (jade.escape((jade_interp = modelConfig.label) == null ? '' : jade_interp)) + "</h3></a>\n            </li>");
    }

  }
}).call(this);

buf.push("\n          </ul>\n        </section>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var section = $$obj[$index];

buf.push("\n        <section class=\"row-fluid\">\n          <h2><span>" + (jade.escape((jade_interp = section.name) == null ? '' : jade_interp)) + "</span></h2>\n          <ul class=\"models\">");
// iterate section.models
;(function(){
  var $$obj = section.models;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var modelConfig = $$obj[$index];

var url = rootPath + '/model/' + modelConfig.modelName
buf.push("\n            <li>\n              <div class=\"btn-group pull-right\">");
if (modelConfig.is_single)
{
buf.push("<a" + (jade.attr("href", '' + (url) + '/document/single', true, true)) + " class=\"btn btn-default\">Edit</a>");
}
else
{
buf.push("<a" + (jade.attr("href", url, true, true)) + " class=\"btn btn-info\"><span" + (jade.attr("id", 'viewAll_' + (modelConfig.modelName) + '', true, true)) + ">View All</span></a>");
if (!modelConfig.model.discriminators || modelConfig.model.discriminators.length == 0)
{
buf.push("<a" + (jade.attr("href", '' + (url) + '/document/new', true, true)) + " class=\"btn btn-default\">New</a>");
}
}
buf.push("\n              </div><a" + (jade.attr("href", url + (modelConfig.is_single ? '/document/single' : ''), true, true)) + ">\n                <h3>" + (jade.escape((jade_interp = modelConfig.label) == null ? '' : jade_interp)) + "</h3></a>\n            </li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var modelConfig = $$obj[$index];

var url = rootPath + '/model/' + modelConfig.modelName
buf.push("\n            <li>\n              <div class=\"btn-group pull-right\">");
if (modelConfig.is_single)
{
buf.push("<a" + (jade.attr("href", '' + (url) + '/document/single', true, true)) + " class=\"btn btn-default\">Edit</a>");
}
else
{
buf.push("<a" + (jade.attr("href", url, true, true)) + " class=\"btn btn-info\"><span" + (jade.attr("id", 'viewAll_' + (modelConfig.modelName) + '', true, true)) + ">View All</span></a>");
if (!modelConfig.model.discriminators || modelConfig.model.discriminators.length == 0)
{
buf.push("<a" + (jade.attr("href", '' + (url) + '/document/new', true, true)) + " class=\"btn btn-default\">New</a>");
}
}
buf.push("\n              </div><a" + (jade.attr("href", url + (modelConfig.is_single ? '/document/single' : ''), true, true)) + ">\n                <h3>" + (jade.escape((jade_interp = modelConfig.label) == null ? '' : jade_interp)) + "</h3></a>\n            </li>");
    }

  }
}).call(this);

buf.push("\n          </ul>\n        </section>");
    }

  }
}).call(this);

buf.push("\n      </div>");
if (!dialog)
{
buf.push("\n      <footer class=\"footer\">");
if (userPanel)
{
buf.push("\n        <p class=\"user-panel\">" + (((jade_interp = userPanel) == null ? '' : jade_interp)) + "</p>");
}
buf.push("\n        <p><a href=\"http://github.com/Empeeric/formage\">Formage</a>&nbsp;" + (jade.escape((jade_interp = version) == null ? '' : jade_interp)) + ", from&nbsp;<a href=\"http://empeeric.com\">Empeeric</a></p><a href=\"http://github.com/Empeeric/formage\"><img" + (jade.attr("src", '' + (rootPath) + '/images/logo-40.png', true, true)) + "></a>\n      </footer>");
}
buf.push("\n      <div id=\"old-version\" hidden class=\"alert alert-error\">\n        <button type=\"button\" data-dismiss=\"alert\" class=\"close\">&times;</button><strong>Warning;</strong>There is a newer version of formage.\n      </div>\n    </div>\n    <script>\n      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n      \n      ga('create', 'UA-15378843-16', 'auto');\n      ga('send', 'pageview');\n      \n    </script>\n    <script" + (jade.attr("src", "" + (rootPath) + "/js/models.js", true, true)) + "></script>\n    <script>\n      var version = '" + (jade.escape((jade_interp = version) == null ? '' : jade_interp)) + "';\n      $.getJSON('http://www.empeeric.com/api/formage/checkVer', {version: version}).done(function (latest) {\n          if (latest > version)\n              $('#old-version').show('slow');\n          });\n    </script>" + (((jade_interp = global_script) == null ? '' : jade_interp)) + "\n  </body>\n</html>");}.call(this,"adminTitle" in locals_for_with?locals_for_with.adminTitle:typeof adminTitle!=="undefined"?adminTitle:undefined,"dialog" in locals_for_with?locals_for_with.dialog:typeof dialog!=="undefined"?dialog:undefined,"global_head" in locals_for_with?locals_for_with.global_head:typeof global_head!=="undefined"?global_head:undefined,"global_script" in locals_for_with?locals_for_with.global_script:typeof global_script!=="undefined"?global_script:undefined,"pageTitle" in locals_for_with?locals_for_with.pageTitle:typeof pageTitle!=="undefined"?pageTitle:undefined,"renderedHead" in locals_for_with?locals_for_with.renderedHead:typeof renderedHead!=="undefined"?renderedHead:undefined,"rootPath" in locals_for_with?locals_for_with.rootPath:typeof rootPath!=="undefined"?rootPath:undefined,"sections" in locals_for_with?locals_for_with.sections:typeof sections!=="undefined"?sections:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"userPanel" in locals_for_with?locals_for_with.userPanel:typeof userPanel!=="undefined"?userPanel:undefined,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));;return buf.join("");
}; 

