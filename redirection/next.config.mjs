/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return[{
            source:'/user',
            destination:'/about',
            permanent:false
         },
        {
            source:'/user/:userid',
            destination:'/user',
            permanent:false
        }
       
    ]
    }
};

export default nextConfig;
