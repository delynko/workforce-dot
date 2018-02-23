var map;
      require([
        "esri/map", "esri/geometry/Extent", 
        "esri/layers/FeatureLayer", 
        "esri/InfoTemplate", "esri/renderers/DotDensityRenderer", 
        "esri/renderers/ScaleDependentRenderer", "esri/dijit/Legend",
        "esri/Color", "dojo/_base/array", "dojo/dom", "dojo/domReady!"
      ], function(
        Map, Extent, 
        FeatureLayer, 
        InfoTemplate, DotDensityRenderer, 
        ScaleDependentRenderer, Legend, 
        Color, array, dom
      ) {
        map = new Map('map', {
            center: [-105.31, 39.5],
            zoom: 10,
            maxZoom: 14,
            basemap: 'gray'
        });
        
        var zips = new FeatureLayer("https://services3.arcgis.com/9ntQlfNHEhmpX4cl/ArcGIS/rest/services/ZIP_with_Counts__Job_Seekers_/FeatureServer/0", {
            outFields: ["Jobs", "JobSeekers"],
        });
        
        var layer = new FeatureLayer("https://services3.arcgis.com/9ntQlfNHEhmpX4cl/ArcGIS/rest/services/ZIP_with_Counts__Job_Seekers_/FeatureServer/0", {
            outFields: ["Jobs", "JobSeekers"],
        });
        
        map.addLayers([zips]);
        
        var jobColor = new Color("#0000ff");
        var jobSeekerColor = new Color("#ff5e00");


        var renderer = new ScaleDependentRenderer({
        rendererInfos: [{
            renderer: new DotDensityRenderer({
                fields: [{
                name: "Jobs",
                color: jobColor
                }, {
                name: "JobSeekers",
                color: jobSeekerColor
                }],
                dotShape: "circle",
                dotValue: 1,
                dotSize: 2
            }),
                maxScale: 570000,
                minScale: 20000001
            },{
            renderer: new DotDensityRenderer({
                fields: [{
                name: "Jobs",
                color: jobColor
                }, {
                name: "JobSeekers",
                color: jobSeekerColor
                }],
                dotShape: "circle",
                dotValue: 1,
                dotSize: 2.5
            }),
                maxScale: 288000,
                minScale: 570001
            },{
            renderer: new DotDensityRenderer({
                fields: [{
                name: "Jobs",
                color: jobColor
                }, {
                name: "JobSeekers",
                color: jobSeekerColor
                }],
                dotShape: "circle",
                dotValue: 1,
                dotSize: 3
            }),
                maxScale: 144000,
                minScale: 288001
            },{
            renderer: new DotDensityRenderer({
                fields: [{
                name: "Jobs",
                color: jobColor
                }, {
                name: "JobSeekers",
                color: jobSeekerColor
                }],
                dotShape: "circle",
                dotValue: 1,
                dotSize: 4
            }),
                maxScale: 72200,
                minScale: 144001
            },{
            renderer: new DotDensityRenderer({
                fields: [{
                name: "Jobs",
                color: jobColor
                }, {
                name: "JobSeekers",
                color: jobSeekerColor
                }],
                dotShape: "circle",
                dotValue: 1,
                dotSize: 5
            }),
                maxScale: 36100,
                minScale: 72201
            }
                    ]
        });
        layer.setRenderer(renderer);
        map.addLayers([layer]);
        
      });