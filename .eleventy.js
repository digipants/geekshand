module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/669bc9a3cac1844b1f7fcb51');
    eleventyConfig.addPassthroughCopy('./src/64184874f371bc785f2236eb');
    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/sitemap.xml');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};
