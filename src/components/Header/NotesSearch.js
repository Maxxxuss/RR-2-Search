import React from "react";
import { Header, Segment, Input, Icon } from "semantic-ui-react";

class NotesSearch extends React.Component {
  render() {
    const {
      channelName,
      handleSearchChange,
      searchLoading
    } = this.props;

    return (
      <Segment clearing>

        {/* Channel Search Input */}
        <Header floated="left">
          <Input
            loading={searchLoading}
            onChange={handleSearchChange}
            size="mini"
            icon="search"
            name="searchTerm"
            placeholder="Search Messages"
          />
        </Header>
      </Segment>
    );
  }
}

export default NotesSearch;
