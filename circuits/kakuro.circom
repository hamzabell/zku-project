pragma circom 2.0.3;

template Kakuro () {
    signal input a[3][4];
    signal input sol[3][4];


    signal output out;

    var in[3][4];
    var inn[3][4];

    var idx = 0;


    for (var i= 0; i < 3; i++) {
        for (var j = 0; j < 4; j++) {
            in[i][j] = a[i][j];
            inn[i][j] = sol[i][j];
        }
    }



    for (var i= 0; i < 3; i++) {
        for (var j = 0; j < 4; j++) {
            if (in[i][j] != 0) {
                // Test rows
                var k = j + 1;

                var current = 0;

                if (k < 4) {

                    while(in[i][k] == 0) {
                        if(k < 4){
                            if(inn[i][k] != 0) {
                                current += inn[i][k];
                            }
                        }
                        k = k + 1;
                        
                        
                    }

                    if(j + 1 < 4){
                        if(inn[i][j+1] !=0 ) {
                          if(in[i][j+1] == 0){
                             assert(current == in[i][j]);
                          }
                        }
                        

                    }
   
                }


                // test columns
                var l = i + 1;

                var current_y = 0;

                if( l < 3) {
                    while(in[l][j] == 0) {
                        if(l < 3){
                            if(inn[l][j] != 0) {
                                current_y += inn[l][j];
                            }
                        }
                         l += 1;
                    }
                    if (i + 1 < 3) {
                        if (inn[i+1][j] != 0) {
                            if(in[i+1][j] == 0) {
                                assert(current_y == in[i][j]);
                            }
                        }
                    }
                }
                
            }

        }


    }

    out <== 1;

}

component main { public [ a ] } = Kakuro();