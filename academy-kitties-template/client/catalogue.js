  function createCatContainer(id, catDetails){
     

        let headBodyDna = catDetails.substring(0, 2);
      
        let eyesDna = catDetails.substring(2, 4);
      
        let bellyMouthDna = catDetails.substring(4, 6);
      
        let earsDna = catDetails.substring(6, 8);

        let tailDna = catDetails.substring(8, 10);
      
        let eyeShape = catDetails.substring(10, 11);
      
        let patternShape = catDetails.substring(11, 12);
    
        let patternMidColor = catDetails.substring(12, 14);
    
        let patternSideColor = catDetails.substring(14, 16);
      
        let animDna = catDetails.substring(16, 17);
    
        let lastDna = catDetails.substring(17);
    
        

        item = `<div class="col-lg-4 catBox m-3 light-b-shadow" id="box`+id+`">
                <div class = "cat" id= "cat` + id + `">
                    <div id="ears`+id+`" class =" ` + (animDna == 2 ? 'noddinghead' : 'ears') + `">
                        <div id = "left-ear` + id + ` class= "ear `+ (animDna == 3 ? 'movingEarLeft' : 'left-ear')+ `" style="background:#` + colors[earsDna] + `">
                            <div class = " left-inner-ear" id="left-inner-ear"></div>
                        </div>
                        <div id = "right-ear` + id + `"class = "ear `+ (animDna == 3 ? 'movingEarRight' : 'right-ear')+ `" style="background:#` + colors[earsDna] + `">
                            <div class = "right-inner-ear" id="eight-inner-ear"></div>
                        </div>
                    </div>

                    <div class = " `+ (animDna == 4 ? 'movingTail': 'tail') + ` " style="background:#` + colors[tailDna] + `">
                        <div class = "inner-tail" style="background:#` + colors[earsDna] + `"></div>
                    </div>

                    <div class = "` + (animDna == 7 ? 'enflatedBelly' : 'body') + `" style="background:#` + colors[headBodyDna] + `"></div>
                    <div class = "` + (animDna == 7 ? 'enflatedBelly' : 'belly') + `" style="background:#` + colors[bellyMouthDna] + `"></div>
                    <div id = "head` + id + `" class =" ` + (animDna == 2 ? 'noddinghead' : 'head') + `">
                        <!-- <div class= "head-pattern"></div> -->
                                        <div id="midShape`+id+`" class="head-shapes" style="background:#` + colors[patternMidColor] + `">
                                            <div id="leftShape`+id+`" class="left_head-shape" style="background:#` + colors[patternSideColor] + `"></div>
                                            <div id="rightShape`+id+`" class="right_head-shape" style="background:#` + colors[patternSideColor] + `"></div>
                                        </div>

                        <div id = "eyes ` + id + `" class = "` + (animDna == 5 ? 'eyesBigger' : 'eyes') + `">
                            <div class = "eye-left">
                                <span id = "leftPupil `+ id + `" class = "` + (animDna == 8 ? 'eyesTired' : (animDna == 9 ? 'eyesChangeColor' : 'pupil-left')) + `" style="background:#` + colors[eyesDna] + `">
                                    <div class = "inner-eyes-big-left"></div>
                                    <div class = "inner-eyes-small-left"></div>
                                </span>
                            </div>

                            <div class = "eye-right">
                                <span id = "rightPupil `+ id + `" class = "` + (animDna == 8 ? 'eyesTired' : (animDna == 9 ? 'eyesChangeColor' : 'pupil-right')) + `" style="background:#` + colors[eyesDna] + `">
                                    <div class = "inner-eyes-big-right"></div>
                                    <div class = "inner-eyes-small-right"></div>
                                </span>
                            </div>    
                        </div>


                        <div class = "mouth"></div>
                        <div class = "whiskers">
                            <div id="whiskright` + id + `" class = "` + (animDna == 6 ? 'movingWhiskersRight' : 'whiskers-right') + `">
                                <div class = "whisker1"></div>
                                <div class = "whisker2"></div>
                                <div class = "whisker3"></div>
                            </div> 
                            <div id="whiskleft` + id + ` "class = " ` + (animDna == 6 ? 'movingWhiskersLeft' : 'whiskers-left') + `">
                                <div class = "whisker4"></div>
                                <div class = "whisker5"></div>
                                <div class = "whisker6"></div>
                            </div>
                        </div>
                        <div class = "mouth-left"></div>
                        <div class = "mouth-right"></div>
                        <div class = "nose"></div>
                        <div class = "chin"></div>
                    </div>


                    <div id= "bothFeet `+ id + `" class = "` + (animDna == 7 ? 'enflatedFeet' : 'feet') + `"  style="background:#` + colors[headBodyDna] + `">
                        <div class = "foot-left"></div>
                        <div class = "foot-right"></div>
                    </div>
                </div>
                </div>
                <div class="dnaDiv" id="catDNA `+ id +`">
                    <b>
                        DNA:
                        <!-- Colors -->
                         <span id="dnabody` + id + `"></span>
                         <span id="dnaeyes` + id + `"></span>
                         <span id="dnabelly` + id + `"></span>
                         <span id="dnaears` + id + `"></span>
                         <span id="dnatail` + id + `"></span>
                        
                         <!-- Cattributes -->
                         <span id="dnashape` + id + `"></span>
                         <span id="dnadecoration` + id + `"></span>
                         <span id="dnadecorationMid` + id + `"></span>
                         <span id="dnadecorationSides` + id + `"></span>
                         <span id="dnaanimation` + id + `"></span>
                         <span id="dnaspecial` + id + `"></span>
                    </b>
                </div>`
             items.push(item);
     }
        $(".row").append(items.join());

        