const Education: React.FC = () => {
    return(
        <section id="eduaction" className="py-20 relative">
            <div className="conatiner mx-auto px-4 md:px-6">
                <h2 className="section-title">Education</h2>

                <div className="max-w-3xl">
                    <div className="timeline-item">
                        <div className="timeline-date">2023 - 2027</div>
                        <h3 className="timeline-tile">Belgium Campus iTversity</h3>
                        <p className="text-gray-600">Bachelor of Computing, Software Engineering</p>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-date">2018 - 2022</div>
                        <h3 className="timeline-tile">Rietondale High School</h3>
                        <p className="text-gray-600">National Senior Certificate</p>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 opacity-5 font-montserrat font-black text-8xl uppercase -rotate-12 pointer-events-none select-none">
                Software Engineering
            </div>
        </section>
    );
};
export default Education;