"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
(function () {
    "use strict";
    (0, qcobjects_1.Package)("org.qcobjects.controllers.swagger", [
        class SwaggerUIController extends qcobjects_1.Controller {
            startSwaggerUI() {
                // Begin Swagger UI call region
                if (typeof SwaggerUIBundle !== "undefined") {
                    /* eslint-disable no-undef */
                    const ui = SwaggerUIBundle({
                        url: qcobjects_1.CONFIG.get("swagger-ui-url", "https://petstore.swagger.io/v2/swagger.json"),
                        dom_id: "#" + qcobjects_1.CONFIG.get("swagger-ui-dom_id", "swagger-ui"),
                        deepLinking: true,
                        presets: [
                            SwaggerUIBundle.presets.apis,
                            SwaggerUIStandalonePreset
                        ],
                        plugins: [
                            SwaggerUIBundle.plugins.DownloadUrl
                        ],
                        layout: "StandaloneLayout"
                    });
                    // End Swagger UI call region
                    window.ui = ui;
                }
            }
            done() {
                this.component.body.innerHTML = "<div id=\"" + qcobjects_1.CONFIG.get("swagger-ui-dom_id", "swagger-ui") + "\"></div>";
                const swaggerUIPackagePath = qcobjects_1.CONFIG.get("swagger-ui-package-path", "node_modules/swagger-ui-dist/");
                this.dependencies?.push((0, qcobjects_1.New)(qcobjects_1.SourceJS, {
                    url: swaggerUIPackagePath + "swagger-ui-standalone-preset.js",
                    external: qcobjects_1.CONFIG.get("swagger-ui-external", false)
                }));
                this.dependencies?.push((0, qcobjects_1.New)(qcobjects_1.SourceCSS, {
                    url: swaggerUIPackagePath + "swagger-ui.css",
                    external: qcobjects_1.CONFIG.get("swagger-ui-external", false)
                }));
                this.dependencies?.push((0, qcobjects_1.New)(qcobjects_1.SourceJS, {
                    url: swaggerUIPackagePath + "swagger-ui-bundle.js",
                    external: qcobjects_1.CONFIG.get("swagger-ui-external", false),
                    done: () => {
                        this.startSwaggerUI();
                    }
                }));
            }
        }
    ]);
})();
