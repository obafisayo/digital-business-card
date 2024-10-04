import Card1Front from "../assets/cards/card1/Front.png";
import Card1Back from "../assets/cards/card1/Back.png";
// import Card2Front from "../assets/cards/card2/Front.png";
// import Card2Back from "../assets/cards/card2/Back.png";
import Logo from "../assets/static/Logo.png";

export const initialPerson = {
    templateId: "1",
    firstname: 'Obafisayo',
    lastname: 'Abimbola',
    name: 'Obafisayo Abimbola',
    title: 'Software Engineer',
    company_name: "Apex Cards",
    company_tagline: "Future of custom cards",
    telephone: "+1 (555) 123-4567",
    email: "abimbolaobafisayo@gmail.com",
    facebook_url: "https://www.facebook.com/johndoe",
    linkedin_url: "https://www.linkedin.com/in/johndoe",
    twitter_url: "https://twitter.com/johndoe",
    website_url: "https://www.johndoe.com",
    address: "123 Tech Street, San Francisco, CA 94105",
    link: 'https://obafisayo-portfolio.netlify.app/',
    location: 'LG, Nigeria',
    cardFront: Card1Front,
    cardBack: Card1Back,
    qrcodeClass: "absolute bottom-5 right-10",
    logo: "https://res.cloudinary.com/dafdhu3h5/image/upload/v1727474173/clurakhvmq2gyyafnndu.png",
    images: [
        "idyfyg0uog5yhi8xamyr",
        "m83bazamitfm9hvrkbem",
        "l5mmi1atyze57eejersj",
        "c8ssxp7ozfwgxywrka6f",
        "oidgqkss5lwmu5psbctt",
        "grant-whitty-vkr8QBzCIdc-unsplash_j0wlxn",
        "Screenshot_2024-06-20_164858_jwxwdw",
    ],
    company: {
        title: "Apex Cards",
        tagLine: "Future of custom cards",
        companyLogo: Logo,
    },
    socials: {
        facebook: "https://facebook.com/",
        whatsapp: "https://web.whatsapp.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
        website: "https://website.com/",
        twitter: "https://x.com/",
    },
    experience: [
        { company: 'Tech Innovations', role: 'Lead Developer', duration: '3 years' },
        { company: 'Web Solutions', role: 'Software Engineer', duration: '2 years' },
    ],
    contact: {
        telephone: "000-123-456-7890",
        email: "abimbolaobafisayo@gmail.com",
        address: "Your address goes here 125 Street, USA",
    },
    skills: ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'],
    bio: 'Passionate software engineer with 5+ years of experience in building scalable web applications.',
};

// Function to generate the HTML string
export const generateHtmlString = (person) => {
    return `
      <div class="absolute inset-0 h-full w-full rounded-xl" style="background-image: url('${person.cardFront}'); background-size: cover; background-position: center;">
          <div class="w-full h-full px-4 py-6 flex">
              <div class="h-full w-1/2 flex flex-col justify-between">
                  <div class="h-fit">
                      <div class="text-lg flex gap-1 font-bold">
                          <p class="text-black">${person.firstname}</p>
                          <p class="text-brandGreen">${person.lastname}</p>
                      </div>
                      <p class="text-sm text-black">${person.title}</p>
                  </div>
                  <ul class="inline-flex flex-col gap-1">
                      ${person.contact.telephone ? `
                          <li class="flex gap-2">
                              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="bg-green-500 text-lg text-white rounded p-[2px] w-[10%] mt-[1px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                              </svg>
                              <p class="text-sm text-black break-normal w-[90%]">${person.contact.telephone}</p>
                          </li>` : ''}
                      ${person.contact.email ? `
                          <li class="flex gap-2">
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="bg-green-500 text-lg text-white rounded p-[2px] w-[10%] mt-[1px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <rect width="416" height="320" x="48" y="96" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="40" ry="40"></rect>
                                  <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160 144 112 144-112"></path>
                              </svg>
                              <p class="text-sm text-black break-normal w-[90%]">${person.contact.email}</p>
                          </li>` : ''}
                      ${person.contact.address ? `
                          <li class="flex gap-2">
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="bg-green-500 text-lg text-white rounded p-[2px] w-[10%] mt-[1px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"></path>
                                  <circle cx="256" cy="192" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle>
                              </svg>
                              <p class="text-sm text-black break-normal w-[90%]">${person.contact.address}</p>
                          </li>` : ''}
                  </ul>
              </div>
              <div class="h-full w-1/2 flex flex-col justify-between">
                  <div class="flex items-center justify-end gap-2 w-full">
                      <div class="h-7 w-7">
                          <img class="w-full h-full" src="${person.company.companyLogo}" alt="Logo" />
                      </div>
                      <div class="text-white">
                          <h3 class="font-semibold">${person.company.title}</h3>
                          <p class="text-xs font-light">${person.company.tagLine}</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `;
};

// Usage example
export const htmlString = generateHtmlString(initialPerson);
