function generate(array) {
    let str = '<div class="grid-container">\n'
    for (const div of array) {
        str += '\t<div class="grid-item">\n'
        str += `\t\t<img src="${div.image}"  width="100%" height="200">\n`
        str += `\t\t<h3>${div.header}</h3>\n`
        str += `\t\t<p>${div.paragraph}</p>\n`
        str += '\t</div>\n'
    }
    str += '</div>\n'
    return (str)
}

const Arr = [
    {
        image: "google.com",
        header: "This is google!!",
        paragraph: "some content bla bla bla"
    },
    {
        image: "fb.com",
        header: "Hello Everyone",
        paragraph: "some content bla bla bla"
    },
    {
        image: "twitter.com",
        header: "Or should I say X",
        paragraph: "some content bla bla bla"
    },
    {
        image: "VSCode.com",
        header: "Your best Editor",
        paragraph: "some content bla bla bla"
    },
    {
        image: "GitHub.com",
        header: "Get all your work organized",
        paragraph: "some content bla bla bla"
    },
]

let ret = generate(Arr)
console.log(ret)