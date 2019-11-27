# Presentation slides using VueJS and EagleJS

## Description

This repository contains all the files necessary for generating presentation slides using [VueJS](https://vuejs.org/) and [EagleJS](https://github.com/Zulko/eagle.js). An example can be found [here](https://christian-nils.github.io/phd_presentation).

The structure of this template was based on the presentation slides created by [JiriChara](https://github.com/JiriChara/the-past-present-and-future-of-javascript).

The VueJS app uses the following VueJS components and modules:

* [vue-burger-menu](https://vue-burger-menu.netlify.com/), a custom component is included in this presentation template so it automatically list the slides name retrieved from the file `store.js`.
* [vue-svg-loader](https://vue-svg-loader.js.org/), with the properties `cleanupIDs` and `removeUnknownsAndDefaults`set to `false` in `vue.config.js`.
* [vue-router](https://router.vuejs.org/).
* [vuex](https://vuex.vuejs.org/)

Note (maybe it sounds unnecessary for most of you): When defining static data such as GSAP timelines for animations, you should use `this.$options` to store your [static data](https://stackoverflow.com/questions/45814507/how-to-set-a-component-non-reactive-data-in-vue-2) in your component (i.e., slide).

### Project configuration

1. Change the web page path in `vue.config.js` and in `deploy.sh`, _presentation_template_ to _github_pages_repository_ (e.g., _phd_presentation_), do not forget to modify your github username as well in `deploy.sh`.
2. Make the file `deploy.sh` executable,

```
chmod +x deploy.sh
```
3. Create your slides, namely create one `vue` file per slide, and reference them in `store.js`. You can change the following options:

    * `name`: component name
    * `menuName`: slide name displayed on the menu
    * `path`: displayed path by the vue-router
    * `steps`: [optional] number of steps the slide as
    * `enterNext`, `enterPrev`, `leaveNext`, `leavePrev`: [optional] transition effects (see EagleJS doc)
    
        or
    
    * `enter`, `leave`: [optional] (see EagleJS doc)

4. Change `theme.css` to adjust the theme template used (including the menu style).

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
