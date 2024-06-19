import React, { useEffect } from 'react';
import { WithContext as ReactTags, SEPARATORS } from 'react-tag-input';
import { BUILDING_DATA_LIST } from '../../data';
import { Box } from '@mui/material';

const suggestions = BUILDING_DATA_LIST.map((country) => {
  return {
    id: country.value,
    text: country.title,
    className: '',
  };
});

const TagInput = ({isHashTag = false, tags, setTags}) => {

  const handleChange = (value, event) => {
    if(!isHashTag) return;
    if (event.target.className !== "ReactTags__tagInputField") {
        if (!/^#/.test(value)) {
            event.target.value = "#"+value;
        }
        return;
    }
    if (!/^#/.test(value)) {
        event.target.value = "#"+value;
    }
}

  const handleDelete = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const onTagUpdate = (index, newTag) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1, newTag);
    setTags(updatedTags);
  };

  const handleAddition = (tag) => {
    setTags((prevTags) => {
      return [...prevTags, tag];
    });
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  const onClearAll = () => {
    setTags([]);
  };
  const getTagStyles = () => {
        const tagStyles = {
           fontSize: "12px",
            display: "flex",
            alignItems: "center"
        }
        if (!isHashTag) {
            Object.assign(tagStyles, {
                borderRadius: "20px",
                fontWeight: "400",
                marginRight: "2px",
                marginBottom: "2px",
                backgroundColor: "secondary.main",
                paddingLeft: "7px",
                color: "white",
            });
        }
        return tagStyles;
    }

  return (
    <Box
        sx={{
            '& .ReactTags__tags': {},
            '& .ReactTags__tagInput': {},
            '& .ReactTags__tagInputField': {},
            '& .ReactTags__selected': {
                display: "flex",
                justifyContent: "start",
                flexWrap: "wrap",
            },
            '& .ReactTags__selected span.ReactTags__tag': getTagStyles(),
            '& .ReactTags__selected .ReactTags__remove': {
                marginLeft: "2px",
                marginRight: "5px",
                width: "12px",
                height: "12px",
                backgroundColor: "#888",
                border: "none",
                borderRadius: '20px',
                cursor: "pointer",
            },
            '& .ReactTags__selected .ReactTags__remove svg': {
                position: 'relative',
                bottom: '4px',
                right: '2px',
                width: "5px",
                height: "5px",
            },
            '& .ReactTags__suggestions': {},
            '& .ReactTags__activeSuggestion': {},
            '& .ReactTags__editTagInput': {},
            '& .ReactTags__editTagInputField': {
                width: "80px",
            },
            '& .ReactTags__clearAll': {},
        }}
    >
        <ReactTags
          tags={tags}
          handleChange={(e)=>{console.log(e)}}
          suggestions={suggestions}
          separators={[SEPARATORS.ENTER, SEPARATORS.COMMA]}
          handleInputChange={handleChange}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          onTagUpdate={onTagUpdate}
          inputFieldPosition="bottom"
          editable
          clearAll
          onClearAll={onClearAll}
          maxTags={7}
        />
    </Box>
  );
};

export default TagInput;