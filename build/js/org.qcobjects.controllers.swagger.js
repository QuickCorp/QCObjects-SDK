/**
 * QCObjects SDK 2.5
 * ________________
 *
 * Author: Jean Machuca <correojean@gmail.com>
 *
 * Cross Browser Javascript Framework for MVC Patterns
 * QuickCorp/QCObjects is licensed under the
 * GNU Lesser General Public License v3.0
 * [LICENSE] (https://github.com/QuickCorp/QCObjects/blob/master/LICENSE.txt)
 *
 * Permissions of this copyleft license are conditioned on making available
 * complete source code of licensed works and modifications under the same
 * license or the GNU GPLv3. Copyright and license notices must be preserved.
 * Contributors provide an express grant of patent rights. However, a larger
 * work using the licensed work through interfaces provided by the licensed
 * work may be distributed under different terms and without source code for
 * the larger work.
 *
 * Copyright (C) 2015 Jean Machuca,<correojean@gmail.com>
 *
 * Everyone is permitted to copy and distribute verbatim copies of this
 * license document, but changing it is not allowed.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerUIController = void 0;
const qcobjects_1 = require("qcobjects");
class SwaggerUIController extends qcobjects_1.Controller {
    component;
    dependencies;
    startSwaggerUI() {
        // Begin Swagger UI call region
        if (typeof SwaggerUIBundle !== "undefined") {
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
exports.SwaggerUIController = SwaggerUIController;
(0, qcobjects_1.Package)("org.qcobjects.controllers.swagger", [
    SwaggerUIController
]);
