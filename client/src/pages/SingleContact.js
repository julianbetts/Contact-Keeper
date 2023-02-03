import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import NotesList from '../components/NotesList';
import NotesForm from '../components/NotesForm';

import { QUERY_SINGLE_CONTACT } from '../utils/queries';

const SingleContact = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { contactId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_CONTACT, {
    // pass URL parameter
    variables: { contactId: contactId },
  });

  const contact = data?.contact || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {contact.contactAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this contact on {contact.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {contact.contactText}
        </blockquote>
      </div>

      <div className="my-5">
        <NotesList notes={contact.notes} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <NotesForm contactId={contact._id} />
      </div>
    </div>
  );
};

export default SingleContact;
