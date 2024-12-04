var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_POSTES_EERSSA_1 = new ol.format.GeoJSON();
var features_POSTES_EERSSA_1 = format_POSTES_EERSSA_1.readFeatures(json_POSTES_EERSSA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POSTES_EERSSA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTES_EERSSA_1.addFeatures(features_POSTES_EERSSA_1);
var lyr_POSTES_EERSSA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTES_EERSSA_1, 
                style: style_POSTES_EERSSA_1,
                popuplayertitle: "POSTES_EERSSA",
                interactive: true,
                title: '<img src="styles/legend/POSTES_EERSSA_1.png" /> POSTES_EERSSA'
            });
var format_FIBRA_ADSS_08H_2 = new ol.format.GeoJSON();
var features_FIBRA_ADSS_08H_2 = format_FIBRA_ADSS_08H_2.readFeatures(json_FIBRA_ADSS_08H_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIBRA_ADSS_08H_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIBRA_ADSS_08H_2.addFeatures(features_FIBRA_ADSS_08H_2);
var lyr_FIBRA_ADSS_08H_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FIBRA_ADSS_08H_2, 
                style: style_FIBRA_ADSS_08H_2,
                popuplayertitle: "FIBRA_ADSS_08H",
                interactive: true,
                title: '<img src="styles/legend/FIBRA_ADSS_08H_2.png" /> FIBRA_ADSS_08H'
            });
var format_DOMOS_3 = new ol.format.GeoJSON();
var features_DOMOS_3 = format_DOMOS_3.readFeatures(json_DOMOS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DOMOS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DOMOS_3.addFeatures(features_DOMOS_3);
var lyr_DOMOS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DOMOS_3, 
                style: style_DOMOS_3,
                popuplayertitle: "DOMOS",
                interactive: true,
                title: '<img src="styles/legend/DOMOS_3.png" /> DOMOS'
            });
var format_NAPS_4 = new ol.format.GeoJSON();
var features_NAPS_4 = format_NAPS_4.readFeatures(json_NAPS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAPS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAPS_4.addFeatures(features_NAPS_4);
var lyr_NAPS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NAPS_4, 
                style: style_NAPS_4,
                popuplayertitle: "NAPS",
                interactive: true,
                title: '<img src="styles/legend/NAPS_4.png" /> NAPS'
            });
var format_POSTES_CNT_5 = new ol.format.GeoJSON();
var features_POSTES_CNT_5 = format_POSTES_CNT_5.readFeatures(json_POSTES_CNT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POSTES_CNT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTES_CNT_5.addFeatures(features_POSTES_CNT_5);
var lyr_POSTES_CNT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTES_CNT_5, 
                style: style_POSTES_CNT_5,
                popuplayertitle: "POSTES_CNT",
                interactive: true,
                title: '<img src="styles/legend/POSTES_CNT_5.png" /> POSTES_CNT'
            });
var format_MANGAS_LINEALES_6 = new ol.format.GeoJSON();
var features_MANGAS_LINEALES_6 = format_MANGAS_LINEALES_6.readFeatures(json_MANGAS_LINEALES_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANGAS_LINEALES_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANGAS_LINEALES_6.addFeatures(features_MANGAS_LINEALES_6);
var lyr_MANGAS_LINEALES_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANGAS_LINEALES_6, 
                style: style_MANGAS_LINEALES_6,
                popuplayertitle: "MANGAS_LINEALES",
                interactive: true,
                title: '<img src="styles/legend/MANGAS_LINEALES_6.png" /> MANGAS_LINEALES'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_POSTES_EERSSA_1.setVisible(true);lyr_FIBRA_ADSS_08H_2.setVisible(true);lyr_DOMOS_3.setVisible(true);lyr_NAPS_4.setVisible(true);lyr_POSTES_CNT_5.setVisible(true);lyr_MANGAS_LINEALES_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_POSTES_EERSSA_1,lyr_FIBRA_ADSS_08H_2,lyr_DOMOS_3,lyr_NAPS_4,lyr_POSTES_CNT_5,lyr_MANGAS_LINEALES_6];
lyr_POSTES_EERSSA_1.set('fieldAliases', {'id': 'id', 'NRO_POSTE': 'NRO_POSTE', });
lyr_FIBRA_ADSS_08H_2.set('fieldAliases', {'id': 'id', });
lyr_DOMOS_3.set('fieldAliases', {'id': 'id', 'ETIQUETA': 'ETIQUETA', });
lyr_NAPS_4.set('fieldAliases', {'id': 'id', 'NRO_POSTE': 'NRO_POSTE', 'DOMO_RAIZ': 'DOMO_RAIZ', 'ETIQUETA': 'ETIQUETA', 'HILO': 'HILO', 'POTENCIA': 'POTENCIA', 'CORE': 'CORE', 'TRJ_OLT': 'TRJ_OLT', 'PORT_OLT': 'PORT_OLT', });
lyr_POSTES_CNT_5.set('fieldAliases', {'id': 'id', 'NRO_POSTE': 'NRO_POSTE', });
lyr_MANGAS_LINEALES_6.set('fieldAliases', {'id': 'id', 'ETIQUETA': 'ETIQUETA', });
lyr_POSTES_EERSSA_1.set('fieldImages', {'id': 'TextEdit', 'NRO_POSTE': 'TextEdit', });
lyr_FIBRA_ADSS_08H_2.set('fieldImages', {'id': 'TextEdit', });
lyr_DOMOS_3.set('fieldImages', {'id': 'TextEdit', 'ETIQUETA': 'TextEdit', });
lyr_NAPS_4.set('fieldImages', {'id': 'TextEdit', 'NRO_POSTE': 'TextEdit', 'DOMO_RAIZ': 'TextEdit', 'ETIQUETA': 'TextEdit', 'HILO': 'TextEdit', 'POTENCIA': 'TextEdit', 'CORE': 'TextEdit', 'TRJ_OLT': 'TextEdit', 'PORT_OLT': 'TextEdit', });
lyr_POSTES_CNT_5.set('fieldImages', {'id': 'TextEdit', 'NRO_POSTE': 'TextEdit', });
lyr_MANGAS_LINEALES_6.set('fieldImages', {'id': 'TextEdit', 'ETIQUETA': 'TextEdit', });
lyr_POSTES_EERSSA_1.set('fieldLabels', {'id': 'no label', 'NRO_POSTE': 'no label', });
lyr_FIBRA_ADSS_08H_2.set('fieldLabels', {'id': 'no label', });
lyr_DOMOS_3.set('fieldLabels', {'id': 'no label', 'ETIQUETA': 'no label', });
lyr_NAPS_4.set('fieldLabels', {'id': 'no label', 'NRO_POSTE': 'no label', 'DOMO_RAIZ': 'no label', 'ETIQUETA': 'no label', 'HILO': 'no label', 'POTENCIA': 'no label', 'CORE': 'no label', 'TRJ_OLT': 'no label', 'PORT_OLT': 'no label', });
lyr_POSTES_CNT_5.set('fieldLabels', {'id': 'no label', 'NRO_POSTE': 'no label', });
lyr_MANGAS_LINEALES_6.set('fieldLabels', {'id': 'no label', 'ETIQUETA': 'no label', });
lyr_MANGAS_LINEALES_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});