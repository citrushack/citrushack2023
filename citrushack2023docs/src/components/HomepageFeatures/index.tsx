/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Learn',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        As a developer on the CitrusHack team, you will have the opportunity to work on a wide range of projects and learn new skills from experienced mentors and fellow team members. Whether you are a beginner or an experienced developer, there is always something new to learn and challenges to overcome.
      </>
    ),
  },
  {
    title: 'Contribute',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Contributing as a developer on the CitrusHack team can be a rewarding experience that allows you to make a meaningful impact on the tech community. As a contributor, you will have the opportunity to work on projects that can benefit students and professionals alike, and gain valuable experience working on a team with diverse backgrounds and skill sets.
      </>
    ),
  },
  {
    title: 'Have Fun!',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Having fun as a developer on the CitrusHack team is a top priority for us. We believe that when you enjoy what you do, you're more likely to produce better work and achieve greater success. As a result, we strive to create a fun and engaging environment that encourages creativity, collaboration, and personal growth.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
