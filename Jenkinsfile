pipeline {
    agent any

    triggers {
        githubPush()
    }

    environment {
        AWS_REGION = "us-east-2"
        ECR_REPO = "508074347333.dkr.ecr.us-east-2.amazonaws.com/devops-app"
        IMAGE_NAME = "devops-app"
        CONTAINER_NAME = "app"
    }

    stages {

        stage('Build Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('ECR Login') {
            steps {
                sh '''
                aws ecr get-login-password --region $AWS_REGION | \
                docker login --username AWS --password-stdin 508074347333.dkr.ecr.us-east-2.amazonaws.com
                '''
            }
        }

        stage('Tag Image') {
            steps {
                sh 'docker tag $IMAGE_NAME:latest $ECR_REPO:latest'
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push $ECR_REPO:latest'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                docker run -d -p 80:3000 --name $CONTAINER_NAME $ECR_REPO:latest
                '''
            }
        }
    }
}
