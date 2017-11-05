# SVG file convert to css class
> It was created for use in expressing svg images using css only.

1. Read the SVG file in the 'svg' folder.
2. Create 'dist / default.css' and 'index.html' files using 'default.css' and 'index.html' in the 'tmpl' folder as a template.

### The contents of the default.css file are as follows:
```css
.svg2css-back{
    display: inline-block;
    background-image: url('data:image/svg+xml;utf8, %3Csvg version=%221.1%22 xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 12 12%22%3E%3Ctitle%3Eback%3C/title%3E%3Cpath d=%22M9.75 1.5l-7.5 4.5 7.5 4.5z%22%3E%3C/path%3E%3C/svg%3E');
}
.svg2css-backward{
    display: inline-block;
    background-image: url('data:image/svg+xml;utf8, %3Csvg version=%221.1%22 xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 12 12%22%3E%3Ctitle%3Ebackward%3C/title%3E%3Cpath d=%22M6.175 1.5v4.091l4.091-4.091v9l-4.091-4.091v4.091l-4.5-4.5z%22%3E%3C/path%3E%3C/svg%3E');
}
.svg2css-first{
    display: inline-block;
    background-image: url('data:image/svg+xml;utf8, %3Csvg version=%221.1%22 xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 12 12%22%3E%3Ctitle%3Efirst%3C/title%3E%3Cpath d=%22M1.125 10.875v-9.75h1.625v4.469l4.063-4.063v4.063l4.063-4.063v8.938l-4.063-4.063v4.063l-4.063-4.063v4.469z%22%3E%3C/path%3E%3C/svg%3E');
}
.svg2css-forward{
    display: inline-block;
    background-image: url('data:image/svg+xml;utf8, %3Csvg version=%221.1%22 xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 12 12%22%3E%3Ctitle%3Eforward%3C/title%3E%3Cpath d=%22M6 10.5v-4.091l-4.091 4.091v-9l4.091 4.091v-4.091l4.5 4.5z%22%3E%3C/path%3E%3C/svg%3E');
}
.svg2css-last{
    display: inline-block;
    background-image: url('data:image/svg+xml;utf8, %3Csvg version=%221.1%22 xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 12 12%22%3E%3Ctitle%3Elast%3C/title%3E%3Cpath d=%22M10.875 1.125v9.75h-1.625v-4.469l-4.063 4.063v-4.063l-4.063 4.063v-8.938l4.063 4.063v-4.063l4.063 4.063v-4.469z%22%3E%3C/path%3E%3C/svg%3E');
}
.svg2css-loop{
    display: inline-block;
    background-image: url('data:image/svg+xml;utf8, %3Csvg version=%221.1%22 xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 12 12%22%3E%3Ctitle%3Eloop%3C/title%3E%3Cpath d=%22M9.596 2.709c-0.891-0.973-2.172-1.584-3.596-1.584-2.692 0-4.875 2.183-4.875 4.875h0.914c0-2.188 1.773-3.961 3.961-3.961 1.171 0 2.224 0.509 2.949 1.317l-1.425 1.425h3.352v-3.352l-1.279 1.279z%22%3E%3C/path%3E%3Cpath d=%22M9.961 6c0 2.188-1.773 3.961-3.961 3.961-1.171 0-2.224-0.509-2.949-1.317l1.425-1.425h-3.352v3.352l1.279-1.279c0.891 0.973 2.172 1.584 3.596 1.584 2.692 0 4.875-2.183 4.875-4.875h-0.914z%22%3E%3C/path%3E%3C/svg%3E');
}
.svg2css-next{
    display: inline-block;
    background-image: url('data:image/svg+xml;utf8, %3Csvg version=%221.1%22 xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 12 12%22%3E%3Ctitle%3Enext%3C/title%3E%3Cpath d=%22M8.902 1.125v9.75h-1.625v-4.469l-4.063 4.063v-8.938l4.063 4.063v-4.469z%22%3E%3C/path%3E%3C/svg%3E');
}
.svg2css-play{
    display: inline-block;
    background-image: url('data:image/svg+xml;utf8, %3Csvg version=%221.1%22 xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 12 12%22%3E%3Ctitle%3Eplay%3C/title%3E%3Cpath d=%22M2.25 1.5l7.5 4.5-7.5 4.5z%22%3E%3C/path%3E%3C/svg%3E');
}
.svg2css-previous{
    display: inline-block;
    background-image: url('data:image/svg+xml;utf8, %3Csvg version=%221.1%22 xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 12 12%22%3E%3Ctitle%3Eprevious%3C/title%3E%3Cpath d=%22M3.098 10.875v-9.75h1.625v4.469l4.063-4.063v8.938l-4.063-4.063v4.469z%22%3E%3C/path%3E%3C/svg%3E');
}
```

## Usage
 
1. `git clone https://github.com/thomasJang/svg2css.git` or download source code.
2. `$ npm i ` (You must have node in your computer)
3. Place the svg files you want to convert in the svg folder.
4. `$ npm start`
5. Check the file in the 'dist' folder.