/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            // Redirect old "about" page to the correct "about-us" page
            {
                source: '/about',
                destination: '/about-us',
                permanent: true,
            },

            // Redirect old "signs" page to the new "roadway-signs" page
            {
                source: '/signs',
                destination: 'services/roadway-signs',
                permanent: true,
            },

            // Redirect old "Our Staff" link to the correct page
            {
                source: '/xxxx',
                destination: '/leadership', // Assuming this is the correct destination for "Our Staff"
                permanent: true,
            },

            // Redirect old guardrail page to the new "Guardrail" page
            {
                source: '/kyle-moritomo',
                destination: '/leadership',
                permanent: true,
            },
            {
                source: '/guardrail-installation-repair',
                destination: '/services/Guardrail',
                permanent: true,
            },
            {
                source: '/george-thompson',
                destination: '/leadership',
                permanent: true,
            },
            {
                source: '/work-zone-safety',
                destination: '/Safety-products',
                permanent: true,
            },
            {
                source: '/orange-safety-fence',
                destination: '/Safety-products',
                permanent: true,
            },
            {
                source: '/work-zone-warning',
                destination: '/Safety-products',
                permanent: true,
            },
            {
                source: '/little-buster-sign-stand',
                destination: '/Safety-products',
                permanent: true,
            },
            {
                source: '/rumble-bars',
                destination: '/services',
                permanent: true,
            },
            {
                source: '/personal-protection-equipment',
                destination: '/Safety-products',
                permanent: true,
            },

        ];
    },
};

export default nextConfig;
