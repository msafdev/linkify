<!-- Improved compatibility of back to top link: See: https://github.com/msafdev/linkify/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/msafdev/linkify">
    <h3 align="center">Linkify</h3>
  </a>



  <p align="center">
    Linktree alternative with little to no code required!
    <br />
    <a href="https://linkify-demo.vercel.app">View Demo</a>
    ·
    <a href="https://github.com/msafdev/linkify/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/msafdev/linkify/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://link.msaf.tech)

Hey there! Want a simple looking link management like Linktree/Milkshake but tired of it looking so bland? Look no further! **Linkify** is here to simplify your link management experience. It's packed with features to make your life easier.

Here's why **Linkify** rocks:

* Make your page look just the way you want with customizable **themes**, including a sleek dark mode, light mode, and premade theme (upcoming).
* No coding headaches here. **Linkify** gets you up and running in minutes, so you can focus on what matters. 
* Free **hosting** using *Vercel* and add a personal touch with your own custom domain.
* Say goodbye to repetitive tasks. **Linkify** offers reusable components (buttons, cards, etc.) you can easily add whenever you want.

We're constantly improving on **Linkify** to meet your needs. Got any issues, ideas, or a feedback? We're all ears!

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This project is built with the following tech-stack:

* [![TypeScript][TypeScript]][TypeScript-url]
* [![Next][Next.js]][Next-url]
* [![TailwindCSS][Tailwind.com]][Tailwind-url]

For a full list of dependencies, see `package.json`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation

_Below is the step-by-step guide on how to install and setup this project efficiently._

#### Setup

1. Clone the repo
   ```sh
   git clone https://github.com/msafdev/linkify.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Change the base color theme using [Shadcn themes](https://ui.shadcn.com/themes), then paste it to `globals.css`
4. Change to content of the page on `content/content.ts`

#### Development

1. Run the project
   ```sh
   npm run dev
   ```
2. Open your browser and go to `http://localhost:PORT`
3. Make changes to the content of the page on `content/content.ts`
4. Make changes to the theme by adding "dark" on the html of the page
5. Customize the code to your liking, and you're good to go!
   
#### Using the generator

1. Go to your `http://localhost:PORT/generate`
2. Add each link you want to add to your page on their respective forms
3. Click on the "Generate" button
4. Copy the content of generated object and paste it on `content/content.ts`
   
#### Deployment

1. Change the `devMode.template` on `content/content.ts` to `false`
2. Build the project or deploy it to Vercel (or any other hosting service actually)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add `content.ts` file generator
- [ ] Add theme switcher with session storage
- [ ] Add Changelog
- [ ] Add Additional Templates w/ Examples

See the [open issues](https://github.com/msafdev/linkify/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/feature-name`)
3. Commit your Changes (`git commit -m 'Add a feature-name'`)
4. Push to the Branch (`git push origin feature/feature-name`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [Linkedin](https://linkedin.com/in/muhammadsalmoon) // faris.kocak@gmail.com

Project Link: [https://github.com/msafdev/linkify](https://github.com/msafdev/linkify)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

These are the resources that helped me build this project:

* [Choose an Open Source License](https://choosealicense.com)
* [Img Shields](https://shields.io)
* [Font Awesome](https://fontawesome.com)
* [Vercel](https://vercel.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/msafdev/linkify.svg?style=for-the-badge
[contributors-url]: https://github.com/msafdev/linkify/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/msafdev/linkify.svg?style=for-the-badge
[forks-url]: https://github.com/msafdev/linkify/network/members
[stars-shield]: https://img.shields.io/github/stars/msafdev/linkify.svg?style=for-the-badge
[stars-url]: https://github.com/msafdev/linkify/stargazers
[issues-shield]: https://img.shields.io/github/issues/msafdev/linkify.svg?style=for-the-badge
[issues-url]: https://github.com/msafdev/linkify/issues
[license-shield]: https://img.shields.io/github/license/msafdev/linkify.svg?style=for-the-badge
[license-url]: https://github.com/msafdev/linkify/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/muhammadsalmoon
[product-screenshot]: public/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Tailwind.com]: https://img.shields.io/badge/Tailwind-0769AD?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwind-url]: https://tailwindcss.com 
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
