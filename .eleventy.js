module.exports = function(eleventyConfig) {
    
    
    staticman_url: https://eleventy-comment.herokuapp.com/v2/entry/anidiotonrampage/Wedding-Invitation/eleventy/comments


    eleventyConfig.addPassthroughCopy("src");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}