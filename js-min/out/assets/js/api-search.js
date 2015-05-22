YUI.add("api-search",function(a){var b=a.Lang,c=a.Node,d=a.Array;a.APISearch=a.Base.create("apiSearch",a.Base,[a.AutoCompleteBase],{RESULT_TEMPLATE:'<li class="result {resultType}"><a href="{url}"><h3 class="title">{name}</h3><span class="type">{resultType}</span><div class="description">{description}</div><span class="className">{class}</span></a></li>',initializer:function(){this._bindUIACBase(),this._syncUIACBase()},_apiResultFilter:function(a,b){return d.filter(b,function(a){return"component"===a.raw.resultType?!1:a})},_apiResultFormatter:function(e,f){return d.map(f,function(d){var e=a.merge(d.raw),f=e.description||"";return f=c.create("<div>"+f+"</div>").get("text"),f=f.length>65?a.Escape.html(f.substr(0,65))+" &hellip;":a.Escape.html(f),e["class"]||(e["class"]=""),e.description=f,e.name=d.highlighted,b.sub(this.RESULT_TEMPLATE,e)},this)},_apiTextLocator:function(a){return a.displayName||a.name}},{ATTRS:{resultFormatter:{valueFn:function(){return this._apiResultFormatter}},resultFilters:{valueFn:function(){return this._apiResultFilter}},resultHighlighter:{value:"phraseMatch"},resultListLocator:{value:"data.results"},resultTextLocator:{valueFn:function(){return this._apiTextLocator}},source:{value:"/api/v1/search?q={query}&count={maxResults}"}}})},"3.4.0",{requires:["autocomplete-base","autocomplete-highlighters","autocomplete-sources","escape"]});