'use strict';
Package('org.qcobjects.controllers.swagger',[
  Class('SwaggerUIController',Controller,{
	  dependencies:[],
	  component:null,
		startSwaggerUI: function (){
			// Begin Swagger UI call region
			const ui = SwaggerUIBundle({
				url: CONFIG.get('swagger-ui-url','https://petstore.swagger.io/v2/swagger.json'),
				dom_id: '#'+CONFIG.get('swagger-ui-dom_id','swagger-ui'),
				deepLinking: true,
				presets: [
					SwaggerUIBundle.presets.apis,
					SwaggerUIStandalonePreset
				],
				plugins: [
					SwaggerUIBundle.plugins.DownloadUrl
				],
				layout: "StandaloneLayout"
			})
			// End Swagger UI call region

			window.ui = ui

		},
		done: function (){
			var controller = this;
      controller.component.body.innerHTML = '<div id="'+CONFIG.get('swagger-ui-dom_id','swagger-ui')+'"></div>';
			var swaggerUIPackagePath = CONFIG.get('swagger-ui-package-path',"node_modules/swagger-ui-dist/");

			this.dependencies.push(New(SourceJS,{
				url:swaggerUIPackagePath+'swagger-ui-standalone-preset.js',
				external:CONFIG.get('swagger-ui-external',false)
			}));
			this.dependencies.push(New(SourceCSS,{
				url:swaggerUIPackagePath+'swagger-ui.css',
				external:CONFIG.get('swagger-ui-external',false)
			}));
			this.dependencies.push(New(SourceJS,{
				url:swaggerUIPackagePath+'swagger-ui-bundle.js',
				external:CONFIG.get('swagger-ui-external',false),
				done:function (){
					controller.startSwaggerUI();
				}
			}));
		}
	})
]);
