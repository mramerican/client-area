import classNames from 'classnames';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { viewModeSelector } from 'store/slices/viewMode';
import { VIEW_MODE } from 'utils/viewMode';

import Popover from '@mui/material/Popover';
import GameId from 'components/GameId/GameId';
import Type from 'components/GameItem/Type/Type';

import styles from './FullInfo.module.scss';

const propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    rtp: PropTypes.number.isRequired,
    rtpOptions: PropTypes.arrayOf(PropTypes.number).isRequired,
    volatility: PropTypes.string.isRequired,
    paylines: PropTypes.number.isRequired,
    minBet: PropTypes.number.isRequired,
    maxBet: PropTypes.number.isRequired,
    maxMultiplier: PropTypes.number.isRequired,
    maxWin: PropTypes.number.isRequired,
    tournamentFeature: PropTypes.bool.isRequired,
    quests: PropTypes.bool.isRequired,
    progressiveJackpots: PropTypes.bool.isRequired,
    gameFeatures: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string,
  }).isRequired,
};
const FullInfo = ({ item }) => {
  const [gameFeaturesAnc, setGameFeaturesAnc] = useState(null);
  const [tagsAnc, setTagsAnc] = useState(null);
  const viewMode = useSelector(viewModeSelector.getViewMode);

  const isSimpleMode = viewMode === VIEW_MODE.SIMPLE;
  const handleClickFeatures = (event) => {
    setGameFeaturesAnc(event.currentTarget);
  };
  const handleCloseFeatures = () => {
    setGameFeaturesAnc(null);
  };
  const handleClickTags = (event) => {
    setTagsAnc(event.currentTarget);
  };
  const handleCloseTags = () => {
    setTagsAnc(null);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img src={item.img} alt={item.title} />
        {item.type && <Type type={item.type} />}
      </div>
      <div className={styles.content}>
        <div className={styles.gameTitle}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.categoryWrapper}>
            <span className={styles.category}>{item.category}</span>
            <GameId gameId={item.id} copyStyles={styles.copy} />
          </div>
          <button className={styles.moreBtn}>More info</button>
        </div>
        <div className={styles.gameInfo}>
          <div className={styles.column}>
            <div className={styles.row}>
              <span>Release date:</span>
              <span>{item.date}</span>
            </div>
            <div className={styles.row}>
              <span>RTP, %:</span>
              <span>{item.rtp}%</span>
            </div>
            <div className={styles.row}>
              <span>RTP Options:</span>
              <span>{item.rtpOptions.join('%, ')}%</span>
            </div>
            <div className={styles.row}>
              <span>Volatility:</span>
              <span>{item.volatility}</span>
            </div>
            <div className={styles.row}>
              <span>Paylines:</span>
              <span>{item.paylines}</span>
            </div>
            <div className={styles.row}>
              <span>Min Bet, €:</span>
              <span>€ {item.minBet}</span>
            </div>
            {isSimpleMode && (
              <div className={styles.row}>
                <span>Max Bet, €:</span>
                <span>€ {item.maxBet}</span>
              </div>
            )}
          </div>
          <div className={styles.column}>
            {!isSimpleMode && (
              <div className={styles.row}>
                <span>Max Bet, €:</span>
                <span>€ {item.maxBet}</span>
              </div>
            )}
            <div className={styles.row}>
              <span>Max Multiplier:</span>
              <span>{item.maxMultiplier}</span>
            </div>
            <div className={styles.row}>
              <span>Max Win, €:</span>
              <span>€ {item.maxWin}</span>
            </div>
            <div className={styles.row}>
              <span>Tournament Feature:</span>
              <span>{item.tournamentFeature ? 'Yes' : 'No'}</span>
            </div>
            <div className={styles.row}>
              <span>Quests:</span>
              <span>{item.quests ? 'Yes' : 'No'}</span>
            </div>
            <div className={styles.row}>
              <span>Progressive Jackpots:</span>
              <span>{item.progressiveJackpots ? 'Yes' : 'No'}</span>
            </div>
            {isSimpleMode && (
              <div className={styles.row}>
                <span>Game Features:</span>
                <span className={styles.tag}>
                  {item.gameFeatures.slice(0, 2).map((value, index) => (
                    <span key={index}>{value}</span>
                  ))}
                  {item.gameFeatures.length > 2 && (
                    <>
                      <span
                        className={styles.tagMore}
                        onClick={handleClickFeatures}
                      >
                        +{item.gameFeatures.length - 2}
                      </span>
                      <Popover
                        id={gameFeaturesAnc ? 'simple-popover' : undefined}
                        open={Boolean(gameFeaturesAnc)}
                        anchorEl={gameFeaturesAnc}
                        onClose={handleCloseFeatures}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                        <div className={classNames(styles.tag, styles.popover)}>
                          {item.gameFeatures.map((value, index) => (
                            <span key={index}>{value}</span>
                          ))}
                        </div>
                      </Popover>
                    </>
                  )}
                </span>
              </div>
            )}
            {isSimpleMode && (
              <div className={styles.row}>
                <span>Tags:</span>
                <span className={styles.tag}>
                  {item.tags.slice(0, 3).map((value, index) => (
                    <span key={index}>{value}</span>
                  ))}
                  {item.tags.length > 3 && (
                    <>
                      <span
                        className={styles.tagMore}
                        onClick={handleClickTags}
                      >
                        +{item.tags.length - 3}
                      </span>
                      <Popover
                        id={tagsAnc ? 'simple-popover' : undefined}
                        open={Boolean(tagsAnc)}
                        anchorEl={tagsAnc}
                        onClose={handleCloseTags}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                        <div className={classNames(styles.tag, styles.popover)}>
                          {item.tags.map((value, index) => (
                            <span key={index}>{value}</span>
                          ))}
                        </div>
                      </Popover>
                    </>
                  )}
                </span>
              </div>
            )}
          </div>
          {!isSimpleMode && (
            <div className={styles.column}>
              <div className={styles.row}>
                <span>Game Features:</span>
                <span className={styles.tag}>
                  {item.gameFeatures.map((value, index) => (
                    <span key={index}>{value}</span>
                  ))}
                </span>
              </div>
              <div className={styles.row}>
                <span>Tags:</span>
                <span className={styles.tag}>
                  {item.tags.map((value, index) => (
                    <span key={index}>{value}</span>
                  ))}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

FullInfo.propTypes = propTypes;
export default FullInfo;
