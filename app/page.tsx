const publication = {
  title: 'Dynamic Persuasion: Decay and Accumulation of Partisan Media Persuasion',
  authors:
    'Matthew A. Baum, Adam J. Berinsky, Justin de Benedictis-Kessner, Joohye Jeong, Zachary Markovich, and Teppei Yamamoto',
  venue: 'Political Science Research and Methods, 2026',
  href: 'https://doi.org/10.1017/psrm.2026.10095',
};

const workingPapers = [
  {
    title:
      'Stimuli Augmentation for Internal and External Validity in Experiments with Latent Treatments',
    authors: 'Joohye Jeong',
    status: 'Under review',
    href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6810619',
  },
  {
    title:
      'Survey Item Placement Has Little Effect on Data Quality and Treatment-Effect Estimates',
    authors: 'Joohye Jeong, Adam J. Berinsky, John V. Kane, and Ning Soong',
    status: 'Under review',
    href: 'https://preprints.apsanet.org/engage/apsa/article-details/6a7b909bd1922e37d548fd1c',
  },
  {
    title:
      'Measuring Interest Group Positions on Legislation: An AI-Driven Analysis of Lobbying Reports',
    authors: 'Jiseon Kim, Dongkwan Kim, Joohye Jeong, Alice Oh, and In Song Kim',
    status: 'Working paper',
    href: 'https://arxiv.org/abs/2504.15333',
  },
];

function AuthorList({ authors }: { authors: string }) {
  const [beforeName, afterName] = authors.split('Joohye Jeong');

  return (
    <>
      {beforeName}
      <strong className="self-author">Joohye Jeong</strong>
      {afterName}
    </>
  );
}

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const cvHref = `${basePath}/Joohye_Jeong_CV.pdf`;

  return (
    <main className="site-shell">
      <div className="page-layout">
        <aside className="author-card" aria-label="Profile">
          <figure className="portrait">
            <img
              src={`${basePath}/joohye-jeong.jpg`}
              alt="Joohye Jeong by the waterfront"
            />
          </figure>

          <h1 className="author-name">Joohye Jeong</h1>
          <p className="author-role">
            Ph.D. Candidate
            <span>Political Science and Statistics</span>
            <span>MIT</span>
          </p>
          <div className="profile-links" aria-label="Contact and documents">
            <a href="mailto:joohye@mit.edu">Email</a>
            <a href={cvHref}>CV</a>
          </div>
        </aside>

        <div className="main-column">
          <header className="profile">
            <p>
              Welcome! I am a Ph.D. candidate in Political Science and
              Statistics at the Massachusetts Institute of Technology (MIT).
            </p>
            <p>
              My research interests are in political methodology and political
              behavior, with a focus on causal inference, experimental design,
              and media effects. My dissertation develops methods for bridging
              experiments and real-world political phenomena. Drawing on both
              experimental and observational data, I address gaps between what
              research designs identify and what we substantively want to know.
            </p>
            <p>
              Before joining MIT, I studied political science and economics at
              Korea University. I hold B.A.s in Political Science and
              International Relations and in Economics, as well as an M.A. in
              Economics.
            </p>
          </header>

          <section
            className="content-section"
            aria-labelledby="publications-title"
          >
            <h2 id="publications-title">Publications</h2>
            <article className="paper-item">
              <h3>
                <a href={publication.href} target="_blank" rel="noreferrer">
                  {publication.title}
                </a>
              </h3>
              <p>
                <AuthorList authors={publication.authors} />
              </p>
              <p className="paper-detail">
                <em>{publication.venue}</em>
              </p>
            </article>

            <h2 className="subsection-title">Working Papers</h2>
            <div className="paper-list">
              {workingPapers.map((paper) => (
                <article className="paper-item" key={paper.title}>
                  <h3>
                    <a href={paper.href} target="_blank" rel="noreferrer">
                      {paper.title}
                    </a>
                  </h3>
                  <p>
                    <AuthorList authors={paper.authors} />
                  </p>
                  <p className="paper-detail">
                    <span>{paper.status}</span>
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
