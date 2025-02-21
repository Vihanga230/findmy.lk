import React from 'react';
import { navigate } from 'gatsby';

import BlogPreviewGrid from '../../components/BlogPreviewGrid';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout/Layout';
import ThemeLink from '../../components/ThemeLink';

import { generateMockBlogData } from '../../helpers/mock';
import * as styles from './index.module.css';
import { toOptimizedImage } from '../../helpers/general';

const BlogPage = (props) => {
  const blogData = generateMockBlogData(6);

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* <Hero
          maxWidth={'400px'}
          image={toOptimizedImage('/blogCover.png')}
          title={`The new standard of Closing`}
          ctaLink={'read story'}
          ctaTo={'/blog/sample'}
          header={'design'}
        /> */}

        {/* <div className={styles.navContainer}>
          <ThemeLink onClick={() => navigate('/blog/sample')} to={'/blog/sample'}>All Posts</ThemeLink>
          <ThemeLink onClick={() => navigate('/blog/sample')} to={'/blog/sample'}>Design</ThemeLink>
          <ThemeLink onClick={() => navigate('/blog/sample')} to={'/blog/sample'}>Collaboration</ThemeLink>
          <ThemeLink onClick={() => navigate('/blog/sample')} to={'/blog/sample'}>Interview</ThemeLink>
          <ThemeLink onClick={() => navigate('/blog/sample')} to={'/blog/sample'}>News</ThemeLink>
        </div> */}

        {/* Blog Grid */}
        {/* <div className={styles.blogsContainer}>
          <Container size={'large'}>
            <BlogPreviewGrid data={blogData} hideReadMoreOnWeb showExcerpt />
          </Container>
        </div> */}

        {/* Installation Guide Section */}
        <Container size={'large'} spacing={'min'}>
          <div className={styles.installationGuide}>
            <h3>Installation Guide</h3>
            <p>
              Apple’s Find My feature is not just for Apple devices! It can be used to track certain third-party accessories that are compatible with Apple Find My. This feature helps you keep tabs on your important items, like keys, bags, and other personal belongings.
            </p>

            <h4>How to Connect the Trackers to Apple Find My</h4>
            <h5>Open the Find My App:</h5>
            <p>On your iPhone, iPad, or iPod touch, open the Find My app. Make sure your Bluetooth is turned on and that you have signed in to your Apple ID.</p>

            <h5>Add New Item:</h5>
            <p>In the Items tab of the app, tap <strong>Add New Item</strong>. This will allow you to begin the process of registering the accessory.</p>

            <h5>Name and Register the Item:</h5>
            <p>Follow the onscreen steps to name your item and link it to your Apple ID. This ensures that it is associated with your Apple account for future tracking.</p>

            <h5>Track your Accessory:</h5>
            <p>After you complete the setup, your accessory will show up in the Find My app. You will be able to:</p>
            <ul>
              <li><strong>View the map:</strong> See its location on the map.</li>
              <li><strong>Play a sound:</strong> If it is nearby, play a sound to help you locate it.</li>
              <li><strong>Enable Lost Mode:</strong> If it is lost, you can mark it as “lost” and receive notifications when it is found.</li>
            </ul>

            <h5>Take Advantage of the U1 Chip:</h5>
            <p>For accessories that support it, you can use the precision tracking available through Apple’s U1 chip, which can guide you to your item with high accuracy.</p>

            <p><strong>Or follow the manufacturer instructions.</strong></p>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default BlogPage;
