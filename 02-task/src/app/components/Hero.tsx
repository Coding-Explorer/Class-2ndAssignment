// This is the Hero component.
// It is a section that contains a div with a green background and a shadow.
const Hero = () => {
    return (
      <section className="bg-blue-200 py-16 flex justify-center items-center">
        <div className="bg-green-400 rounded-lg shadow-lg p-8 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-black">Welcome to the Hero Section</h2>
          <p className="mt-4 text-black">
            I'm Rabail Khan Passionate and innovative web development student at the Governor Sindh IT Initiative (GIAIC),
            currently immersing myself in the dynamic realms of Next.jsand React. Committed to crafting seamless, user-friendly
            web applications, I am focused on leveraging these advanced technologies to create impactful digital solutions.
            My journey is fueled by a dedication to continuous learning and a drive to push the boundaries of what's possible in web development.
          </p>
        </div>
      </section>
    );
  };
  
  export default Hero;