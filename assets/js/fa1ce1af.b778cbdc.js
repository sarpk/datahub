"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4685],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),d=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=d(a),c=r,g=s["".concat(u,".").concat(c)]||s[c]||m[c]||l;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},41035:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={title:"Source Name",sidebar_label:"Source Name",slug:"/metadata-ingestion/source-docs-template",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source-docs-template.md"},u="Source Name",d={unversionedId:"metadata-ingestion/source-docs-template",id:"metadata-ingestion/source-docs-template",isDocsHomePage:!1,title:"Source Name",description:"Certified",source:"@site/genDocs/metadata-ingestion/source-docs-template.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion/source-docs-template",permalink:"/docs/metadata-ingestion/source-docs-template",editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source-docs-template.md",tags:[],version:"current",frontMatter:{title:"Source Name",sidebar_label:"Source Name",slug:"/metadata-ingestion/source-docs-template",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source-docs-template.md"}},p=[{value:"Integration Details",id:"integration-details",children:[{value:"Concept Mapping",id:"concept-mapping",children:[],level:3},{value:"Supported Capabilities",id:"supported-capabilities",children:[],level:3}],level:2},{value:"Metadata Ingestion Quickstart",id:"metadata-ingestion-quickstart",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Install the Plugin(s)",id:"install-the-plugins",children:[],level:3},{value:"Configure the Ingestion Recipe(s)",id:"configure-the-ingestion-recipes",children:[{value:"<code>&#39;acryl-datahub[source-name]&#39;</code>",id:"acryl-datahubsource-name",children:[],level:4},{value:"<code>&#39;acryl-datahub[source-usage-name]&#39;</code>",id:"acryl-datahubsource-usage-name",children:[],level:4}],level:3}],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Common Issue",id:"common-issue",children:[],level:3}],level:2}],m={toc:p};function s(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"source-name"},"Source Name"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-incubating-blue",alt:"Incubating"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-testing-lightgrey",alt:"Testing"})),(0,l.kt)("h2",{id:"integration-details"},"Integration Details"),(0,l.kt)("h3",{id:"concept-mapping"},"Concept Mapping"),(0,l.kt)("p",null,"This ingestion source maps the following Source System Concepts to DataHub Concepts:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Source Concept"),(0,l.kt)("th",{parentName:"tr",align:null},"DataHub Concept"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataplatform"},"Data Platform")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataset"},"Dataset")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/datajob"},"Data Job")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataflow"},"Data Flow")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/chart"},"Chart")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dashboard"},"Dashboard")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/corpuser"},"User (a.k.a CorpUser)")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"CorpGroup"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Domain"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Container"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Tag"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"GlossaryTerm"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"GlossaryNode"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Assertion"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"DataProcess"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"MlFeature"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"MlFeatureTable"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"MlModel"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"MlModelDeployment"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"MlPrimaryKey"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"SchemaField"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"DataHubPolicy"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"DataHubIngestionSource"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"DataHubSecret"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"DataHubExecutionRequest"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"DataHubREtention"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"supported-capabilities"},"Supported Capabilities"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Capability"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data Container"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled by default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Detect Deleted Entities"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Requires recipe configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data Domain"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Requires transformer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dataset Profiling"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Requires ",(0,l.kt)("inlineCode",{parentName:"td"},"acryl-datahub[source-usage-name]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dataset Usage"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Requires ",(0,l.kt)("inlineCode",{parentName:"td"},"acryl-datahub[source-usage-name]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Extract Descriptions"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled by default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Extract Lineage"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled by default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Extract Ownership"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled by default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Extract Tags"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Requires transformer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Partition Support"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Not applicable to source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Platform Instance"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Not applicable to source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"metadata-ingestion-quickstart"},"Metadata Ingestion Quickstart"),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"In order to ingest metadata from ","[Source Name]",", you will need:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"eg. Python version, source version, source access requirements"),(0,l.kt)("li",{parentName:"ul"},"eg. Steps to configure source access"),(0,l.kt)("li",{parentName:"ul"},"...")),(0,l.kt)("h3",{id:"install-the-plugins"},"Install the Plugin(s)"),(0,l.kt)("p",null,"Run the following commands to install the relevant plugin(s):"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[source-name]'")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[source-usage-name]'")),(0,l.kt)("h3",{id:"configure-the-ingestion-recipes"},"Configure the Ingestion Recipe(s)"),(0,l.kt)("p",null,"Use the following recipe(s) to get started with ingestion. "),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"em",href:"/docs/#recipes"},"main recipe guide"),".")),(0,l.kt)("h4",{id:"acryl-datahubsource-name"},(0,l.kt)("inlineCode",{parentName:"h4"},"'acryl-datahub[source-name]'")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"source:\n  type: source_name\n  config:\n    # Required fields\n    option1: value1\n\nsink:\n  # sink configs\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"View All Recipe Configuartion Options"),"| Field | Required | Default | Description | | --- | :-: | :-: | --- | | `field1` | \u2705 | `default_value` | A required field with a default value | | `field2` | \u274c | `default_value` | An optional field with a default value | | `field3` | \u274c | | An optional field without a default value | | ... | | |"),(0,l.kt)("h4",{id:"acryl-datahubsource-usage-name"},(0,l.kt)("inlineCode",{parentName:"h4"},"'acryl-datahub[source-usage-name]'")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"source:\n  type: source-usage-name\n  config:\n    # Required Fields\n    option1: value1\n\n    # Options\n    top_n_queries: 10\n\nsink:\n  # sink configs\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"View All Recipe Configuartion Options"),"| Field | Required | Default | Description | | --- | :-: | :-: | --- | | `field1` | \u2705 | `default_value` | A required field with a default value | | `field2` | \u274c | `default_value` | An optional field with a default value | | `field3` | \u274c | | An optional field without a default value | | ... | | |"),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("h3",{id:"common-issue"},"[Common Issue]"),(0,l.kt)("p",null,"[Provide description of common issues with this integration and steps to resolve]"))}s.isMDXComponent=!0}}]);