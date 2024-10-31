// BadgeCard.js
import React from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { WhatsappShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import './BadgeCard.css';

const BadgeCard = ({ badges }) => (
  <div className="badge-card">
    <h3>Badges Earned</h3>
    <div className="badges">
      {badges.map((badge, index) => (
        <div key={index} className="badge-item">
          <img src={`/assets/img/${badge}.png`} alt={badge} className="badge-image" />
          <p>{badge}</p>
          <div className="badge-share">
            <FaShareAlt />
            <WhatsappShareButton url={`https://badge-link.com/${badge}`}>
              WhatsApp
            </WhatsappShareButton>
            <LinkedinShareButton url={`https://badge-link.com/${badge}`}>
              LinkedIn
            </LinkedinShareButton>
            <TwitterShareButton url={`https://badge-link.com/${badge}`}>
              Twitter
            </TwitterShareButton>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BadgeCard;
