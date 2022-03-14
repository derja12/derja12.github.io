DEFAULT_COLOR_OPTIONS = ["#253140", "#344F59", "#3B7302", "#590202", "#8C6A03", "#314035"]; // ADD OR REMOVE COLORS AS NEEDED - code handles that

// PICTURES ARE SQUARES!!! made out of an array of arrays ie. [[123],[123],[123]]

var app = new Vue({
    el: '#app',
    data: {
        picture: [],
        seeds: [],
        s_colors: [],
        JFA_ONLINE: false,
        JFA_K: -1,
    },
    methods: {
        createNewPicture: function(size=40) {
            if (size <= 0) return;      // picture must be larger than 0
            this.picture = [];
            for (let i = 0; i < size; i++) { // produce picture[size][size]
                this.picture.push([])
                for (let j = 0; j < size; j++) { // all pixels start at -1
                    this.picture[i].push(-1);
                }
            }
            this.$forceUpdate();
        },
        seedPicture: function(seeds=2) {
            if (this.picture.length <= 0) {
                console.error("cannot seed picture with '0' rows");
                return;
            }
            this.seeds = [];
            this.s_colors = [];
            for (let i = 0; i < seeds; i++) {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                let random_color = "rgb(" + r + "," + g + "," + b + ")";
                this.s_colors.push(random_color);
                let newseed = [];
                let x = Math.floor(Math.random() * this.picture.length);
                let y = Math.floor(Math.random() * this.picture[0].length);
                newseed.push(x, y);
                this.setPixel(x, y, i);
                this.seeds.push(newseed);
            }
            this.$forceUpdate();
            return;
        },
        startJFA: function() {
            if (this.picture.length <= 0) {
                console.error("cannot start algorithm with size '0'");
                return;
            }
            if (this.seeds.length == 0) {
                console.error("cannot start algorithm with '0' seeds");
                return;
            }
            this.JFA_K = this.picture.length/2; // initial K value of N/2
            this.JFA_ONLINE = true;
        },
        iterateJFA: function(verbose=false) {
            for (let x = 0; x < this.picture.length; x++) {
                for (let y = 0; y < this.picture[0].length; y++) {
                    // for every pixel
                    for(let i = -this.JFA_K; i <= this.JFA_K; i += this.JFA_K) {
                        for(let j = -this.JFA_K; j <= this.JFA_K; j += this.JFA_K) {
                            let p = this.getPixel(x, y);
                            if (verbose) console.log(i, j);
                            // for each neighbor q at (x+i, y+j)
                            let q = this.getPixel(x+i, y+j);
                            if (!this.isColorDefined(p) && this.isColorDefined(q)) { 
                                // if p is undefined and q is colored
                                // change p's color to q's
                                if (verbose) console.log("updated", x, "x", y, "y to", this.s_colors[q]);
                                this.setPixel(x, y, q); 
                            } else if (this.isColorDefined(p) && this.isColorDefined(q)) {
                                // check p's distance from both seeds
                                if (this.getDistanceFromSeed(x, y, p) > this.getDistanceFromSeed(x, y, q)) {
                                    this.setPixel(x, y, q);
                                }
                            }
                        }   
                    }
                }
            }
            this.JFA_K = Math.floor(this.JFA_K / 2);
            if (this.JFA_K == 0) {
                console.log("JFA_K recurring iteration of 1");
                this.JFA_K = 1;
            }
            this.$forceUpdate();
        },
        getPixel: function(x,y) {
            // currently just grabs picture[i][j]. 
            // Might change if I change how the picture is stored in memory
            if (x < 0 || y < 0 || x >= this.picture.length || y >= this.picture[0].length) {
                return -1;
            }
            return this.picture[x][y];
        },
        setPixel: function(x, y, color) {
            this.picture[x][y] = color;
        },
        getColor: function(p) {
            return p;
        },
        isColorDefined: function(p) {
            // undefined color == -1
            return (this.getColor(p) != -1);
        },
        getDistanceFromSeed: function(x, y, seed) {
            let diff_x = x - this.seeds[seed][0];
            let diff_y = y - this.seeds[seed][1];
            return Math.sqrt(diff_x * diff_x + diff_y * diff_y);
        },
        getFrameStyle: function() {
            let rows = this.picture.length;
            let columns = this.picture[0].length;
            let style = {
                gridTemplateRows: "repeat(" + rows + " , 1fr)",
                gridTemplateColumns: "repeat(" + columns + " , 1fr)"
            };
            return style;
        },
        getPixelStyle: function(seed) {
            let color = this.s_colors[seed];
            let style = {backgroundColor: color};
            return style;
        },
        getPixels: function() {
            let pixels = [];
            this.picture.forEach(row => {
                row.forEach(pixel => {
                    pixels.push(pixel);
                });
            });
            return pixels;
        }
    },
    computed: {},
    created: function () {
        this.createNewPicture(40);
    }
});
