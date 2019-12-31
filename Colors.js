export const Colors = (function() {
    var turfColor = "#ADFF2F";
    var seaColor = "#4d4dff";
    var beachColor = "#ffbca4";
    var redTeamColor = "#E50000";
    var hotPinkTeamColor = "#ff69b4";
    var gainsborough = "#dfcdfc";
    var black = "#000000";
    var brown = "#964b00";
    var gray = "#dcdcdc";
    var industrialGray = "#d3d3d3";
    var white = "#fff";
    var skin = "#ffdbac";
    var skyBlue = "#87ceeb";
    var focusColor = "#0000FF";
    var attackColor = "#F05E23";
    var fontColor = "#3d3d3d";

    function colorMutator(color, percent) {

        var R = parseInt(color.substring(1,3),16);
        var G = parseInt(color.substring(3,5),16);
        var B = parseInt(color.substring(5,7),16);
    
        R = parseInt(R * (100 + percent) / 100);
        G = parseInt(G * (100 + percent) / 100);
        B = parseInt(B * (100 + percent) / 100);
    
        R = (R<255)?R:255;  
        G = (G<255)?G:255;  
        B = (B<255)?B:255;  
    
        var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
        var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
        var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));
        
        return "#"+RR+GG+BB;
    }

    var publicAPI = {
        turfColor,
        seaColor,
        beachColor,
        redTeamColor,
        hotPinkTeamColor,
        gainsborough,
        white,
        black,
        brown,
        gray,
        industrialGray,
        skin,
        skyBlue,
        focusColor,
        attackColor,
        fontColor,
        colorMutator
    };

    return publicAPI;
})();

