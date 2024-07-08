pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/votre-utilisateur/votre-repo.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Dockerize') {
            steps {
                script {
                    docker.build('calculator-app')
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
