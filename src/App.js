import * as React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Worker } from "@react-pdf-viewer/core";
import { IntlProvider } from "react-intl";

import en from "./translations/ENG.json";
import uk from "./translations/UA.json";
import ru from "./translations/RU.json";

import Main from "./pages/Main";
import Projects from "./pages/Projects";
import {
  getProjects,
  selectProjects,
  selectProjectsError,
  selectProjectsLoading,
} from "./redux/projects";
import Loader from "./components/Loader";
import Contacts from "./pages/Contacts";

const App = (props) => {
  const { projectsList, getProjects, projectsLoading } = props;

  useEffect(() => {
    if (projectsList.length === 0 && projectsLoading) {
      getProjects();
    }
  }, [projectsList]);

  const AppContext = React.createContext();
  const [lang, setLang] = React.useState("ru");
  const [messages, setMessages] = React.useState(ru);

  useEffect(() => {
    if (lang === "ru") {
      setMessages(ru);
    }
    if (lang === "uk") {
      setMessages(uk);
    }
    if (lang === "en") {
      setMessages(en);
    }
  }, [lang]);

  let value = {
    state: {
      lang: lang,
      switchLang: (value) => setLang(value),
    },
  };

  return (
    <AppContext.Provider value={value}>
      <IntlProvider messages={messages} locale={lang} defaultLocale="ru">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
          {!projectsLoading ? (
            <Router>
              <Switch>
                <Route
                  path="/"
                  component={() => (
                    <Main {...props} projectsList={projectsList} />
                  )}
                  exact
                />
                <Route
                  path="/projects"
                  component={() => (
                    <Projects {...props} projectsList={projectsList} />
                  )}
                />
                <Route path="/contacts" component={() => <Contacts />} />
              </Switch>
            </Router>
          ) : (
            <Loader />
          )}
        </Worker>
      </IntlProvider>
    </AppContext.Provider>
  );
};

const mapStateToProps = (state) => ({
  projectsLoading: selectProjectsLoading(state),
  projectsList: selectProjects(state),
  projectsError: selectProjectsError(state),
});

const mapDispatchToProps = {
  getProjects: getProjects,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
