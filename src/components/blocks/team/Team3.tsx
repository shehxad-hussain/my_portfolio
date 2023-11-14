import { FC } from 'react';
import Team from 'icons/lineal/Team';
import Carousel from 'components/reuseable/Carousel';
import { TeamCard1 } from 'components/reuseable/team-cards';
// -------- data -------- //
import teams from 'data/team-list';

const Team3: FC = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row mb-3">
          <div className="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
            <Team className="icon-svg-md mb-4" />
            <h2 className="display-4 mb-3 px-lg-14">Save your time and money by choosing our professional team.</h2>
          </div>
        </div>

        <div className="position-relative">
          <div
            className="shape rounded-circle bg-soft-yellow rellax w-16 h-16"
            style={{ bottom: '0.5rem', right: '-1.7rem' }}
          />

          <div
            className="shape rounded-circle bg-line red rellax w-16 h-16"
            style={{ top: '0.5rem', left: '-1.7rem' }}
          />

          <Carousel
            className="p-2"
            navigation={false}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 }
            }}
          >
            {teams.map((item) => (
              <TeamCard1 {...item} key={item.id} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Team3;
