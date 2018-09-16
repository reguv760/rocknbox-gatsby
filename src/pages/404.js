import React from 'react'
import styled from 'styled-components';

const NotFoundCSS = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin: 0 auto;
  min-height: 140rem;
  background-color: #2bd1fc;
`;

const NotFoundPage = () => (

	<NotFoundCSS>
	  <div className="container">
		  <section>
		    <h1>NOT FOUND</h1>
		    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		  </section>
	  </div>
	</NotFoundCSS>
)

export default NotFoundPage
