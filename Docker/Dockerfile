FROM python:3.11-slim

# Copy requirements file for it to be available on the image created
COPY requirements.txt .

RUN pip3 install -r requirements.txt && \
    groupadd -r demouser && useradd -r -g demouser demouser && \
    mkdir /src && \
    chown -R demouser:demouser /src

USER demouser

WORKDIR /src

ENV FLASK_APP=app.py REDIS_HOST=redis

# copy remaining files
COPY . .

CMD ["flask", "run", "-h", "127.0.0.1"]
