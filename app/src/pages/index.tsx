import { NextPage } from 'next'

import { Row, Col, CardDeck, Card } from 'react-bootstrap'

import MainLayout from '../components/MainLayout/MainLayout'

const Home: NextPage = () => (
  <MainLayout siteTitle='Dark Horse Music - Isle of Man' pageTitle='Home'>
    <Row className='justify-content-center'>
      <Col className='col-sm-10 col-lg-8'>
        <h1 className='text-center mb-4'>Dark Horse Line Up 2021</h1>
        <h3 className='text-center text-danger'>Saturday Fancy Dress Theme – The Night Circus</h3>
        <h2 className='text-center'>The Barn</h2>
        <CardDeck>
          <Card className='bg-transparent text-center'>
            <Card.Body>
              <h4 className='card-title'>Friday 23rd July</h4>
              <p className='card-text'>Baad Acid</p>
              <p className='card-text'>Long Tall Shakies</p>
              <p className='card-text'>El Catraz</p>
              <p className='card-text'>No One Died</p>
            </Card.Body>
          </Card>
          <Card className='bg-transparent text-center'>
            <div className='card-body'>
              <h4 className='card-text'>Saturday 24th July</h4>

              <p className='card-text'>Electrofresh</p>

              <p className='card-text'>Dusty Plankton</p>

              <p className='card-text'>Mad Daddy</p>

              <p className='card-text'>Motherfunkers</p>
              <p className='card-text'>Parallel Lines</p>
              <p className='card-text'>SoundCheck</p>
            </div>
          </Card>
          <Card className='card bg-transparent text-center'>
            <div className='card-body'>
              <h4 className='card-text'>Sunday 25th July</h4>

              <p className='card-text'>DC/AC</p>

              <p className='card-text'>The Brass Machine</p>

              <p className='card-text'>Jambareef</p>
              <p className='card-text'>Clash Vooar</p>
            </div>
          </Card>
        </CardDeck>
        <h2 className='text-center'>Cooil Cocktail Stage</h2>
        <CardDeck>
          <Card className='bg-transparent text-center'>
            <div className='card-body'>
              <h4 className='card-title'>Friday 23rd July</h4>
              <p className='card-text'>Volume</p>
              <p className='card-text'>Dizzy Disco</p>
              <p className='card-text'>GOMH</p>
            </div>
          </Card>
          <Card className=' bg-transparent text-center'>
            <div className='card-body'>
              <h4 className='card-text'>Saturday 24th July</h4>

              <p className='card-text'>David Moran</p>

              <p className='card-text'>Mother Funkers</p>

              <p className='card-text'>Jason Thomas</p>

              <p className='card-text'>Sansoucci</p>
              <p className='card-text'>Paddy Rantin</p>
            </div>
          </Card>
          <Card className=' bg-transparent text-center'>
            <div className='card-body'>
              <h4 className='card-text'>Sunday 25th July</h4>

              <p className='card-text'>The Blair House Project</p>

              <p className='card-text'>Bunka</p>

              <p className='card-text'>Dark Horse DJs</p>
              <p className='card-text'>The Slowy Tunnel</p>
            </div>
          </Card>
        </CardDeck>
        <h2 className='text-center'>The Mill</h2>
        <div className='card-deck'>
          <Card className=' bg-transparent text-center'>
            <div className='card-body'>
              <h4 className='card-title'>Friday 23rd July</h4>
              <p className='card-text'>Manavia</p>
              <p className='card-text'>The Boneyard</p>
              <p className='card-text'>Creamyfresh Ice (DJ)</p>
            </div>
          </Card>
          <Card className=' bg-transparent text-center'>
            <div className='card-body'>
              <h4 className='card-text'>Saturday 24th July</h4>

              <p className='card-text'>Persian Doormats</p>

              <p className='card-text'>El Catraz</p>

              <p className='card-text'>Baad Acid</p>

              <p className='card-text'>Parralel Lines</p>
              <p className='card-text'>13th Pillar</p>
              <p className='card-text'>Stones Throw</p>
              <p className='card-text'>Jo &amp; Juan</p>
              <p className='card-text'>Jamys</p>
            </div>
          </Card>
          <Card className=' bg-transparent text-center'>
            <div className='card-body'>
              <h4 className='card-text'>Sunday 25th July</h4>

              <p className='card-text'>Conylt</p>

              <p className='card-text'>The Druidales</p>

              <p className='card-text'>Crystal Methodists</p>
              <p className='card-text'>Clash Vooar</p>
              <p className='card-text'>Jenny</p>
              <p className='card-text'>World Without Rules</p>
            </div>
          </Card>
        </div>
        <h2 className='text-center'>Sound Records</h2>
        <div className='card-deck'>
          <Card className=' bg-transparent text-center'>
            <div className='card-body'>
              <h4 className='card-title'>Friday 23rd July</h4>
              <p className='card-text'>CG Dips (Cian Geoghan)</p>
              <p className='card-text'>Adam ‘Sol’ Cairney</p>
              <p className='card-text'>PMIX</p>
            </div>
          </Card>
          <Card className=' bg-transparent text-center'>
            <div className='card-body'>
              <h4 className='card-text'>Saturday 24th July</h4>

              <p className='card-text'>DJ Tom Doyle</p>

              <p className='card-text'>DJ Azaria Sheely</p>

              <p className='card-text'>Manavia</p>

              <p className='card-text'>Toucan Party</p>
              <p className='card-text'>Terry George</p>
              <p className='card-text'>Sea Sparrow</p>
              <p className='card-text'>Sound Records DJ’s</p>
            </div>
          </Card>
          <Card className=' bg-transparent text-center'>
            <div className='card-body'>
              <h4 className='card-text'>Sunday 25th July</h4>

              <p className='card-text'>Ed Oldham</p>

              <p className='card-text'>Sound Records DJs</p>
            </div>
          </Card>
        </div>
        <h2 className='text-center'>Compton Vaults Acoustic Stage</h2>
        <div className='card-deck'>
          <Card className=' bg-transparent text-center'>
            <div className='card-body'>
              <p className='card-text'>
                Evel Wonder; PWS; Tiger; Half Naked Headline; Night Time Tennis; The Getaways;
                Originals
              </p>
            </div>
          </Card>
        </div>
        <h2 className='text-center'>SoundCheck</h2>
        <div className='card-deck'>
          <Card className=' bg-transparent text-center'>
            <div className='card-body'>
              <p className='card-text'>Lineup TBC</p>
            </div>
          </Card>
        </div>
        <h2 className='text-center'>The Bass Bus</h2>
        <div className='card-deck'>
          <Card className=' bg-transparent text-center'>
            <div className='card-body'>
              <p className='card-text'>Lineup TBC</p>
            </div>
          </Card>
        </div>
        <h2 className='text-center'>New Social Studios</h2>
        <div className='card-deck'>
          <Card className=' bg-transparent text-center'>
            <div className='card-body'>
              <p className='card-text'>Lineup TBC</p>
            </div>
          </Card>
        </div>
        <h2 className='text-center'>The Hive</h2>
        <div className='card-deck'>
          <Card className=' bg-transparent text-center'>
            <div className='card-body'>
              <p className='card-text'>
                Wellness Area, Yoga, Breath Work, Wim Hof; Drumming Workshops; Mindfulness and more
                to be announced...
              </p>
            </div>
          </Card>
        </div>
        <h2 className='text-center'>Mad Jacks</h2>
        <div className='card-deck'>
          <Card className=' bg-transparent text-center'>
            <div className='card-body'>
              <p className='card-text'>Axe throwing for the all family</p>
            </div>
          </Card>
        </div>
        <h2 className='text-center'>Food Court</h2>
        <div className='card-deck'>
          <Card className=' bg-transparent text-center'>
            <div className='card-body'>
              <p className='card-text'>
                Black Dog Pizza; Barista Express; Veg &amp; Vitality; La Creperie, Baby Cheezus; Cow
                &amp; Pig; Davisons Icecream; MexiMann
              </p>
            </div>
          </Card>
        </div>
        <h2 className='text-center'>Stalls</h2>
        <div className='card-deck'>
          <Card className=' bg-transparent text-center'>
            <div className='card-body'>
              <p className='card-text'>Glitter Shack; Hair Braiding; Tiny Tots Soft Play</p>
            </div>
          </Card>
        </div>
      </Col>
    </Row>
  </MainLayout>
)

export default Home
