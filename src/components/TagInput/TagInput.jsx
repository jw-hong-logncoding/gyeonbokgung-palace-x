import { WithContext as ReactTags, SEPARATORS } from 'react-tag-input';
import { Box } from '@mui/material';

const TagInput = ({isHashTag = false, tags, setTags, autoFocus}) => {
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
    tag.id = tag.id.replace(/,/g, '').replace(/ /g, '');
    tag.text = tag.text.replace(/,/g, '').replace(/ /g, '');
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

  const handleTagClick = (index, event) => {
    event.stopPropagation();
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
    const enterEvent = new KeyboardEvent('keydown', {
        key: 'Enter',
        code: 'Enter',
        bubbles: true,
        cancelable: true,
        which: 13,
        keyCode: 13,
    });

  return (
    <Box
        sx={{
            '& .ReactTags__tags': {},
            '& .ReactTags__tagInput': {},
            '& .ReactTags__tagInputField': {
              width: "97%"
            },
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
            '& .ReactTags__clearAll': {
              marginLeft: "5px",
              display: "none"
            },
        }}
    >
        <form>
        <ReactTags
            autoFocus={autoFocus ? true: false}
            inputProps={{
                onKeyUp: (e) => {
                    if(e.key === 'Unidentified'){
                        var inputValue = e.target.value;
                        var lastLetter = inputValue.charAt(inputValue.length - 1);
                        if(lastLetter === ',' || lastLetter === '\n') {
                            e.target.dispatchEvent(enterEvent);
                        }
                    }
                },
                
            }}
          tags={tags}
          separators={[SEPARATORS.ENTER, SEPARATORS.COMMA]}
          handleInputChange={handleChange}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          onTagUpdate={onTagUpdate}
          inputFieldPosition="bottom"
          placeholder={isHashTag ? 'Please enter to add new hashtag' : 'Please enter to add new keyword'}
          clearAll
          onClearAll={onClearAll}
          maxTags={4}
        />
</form>
    </Box>
  );
};

export default TagInput;